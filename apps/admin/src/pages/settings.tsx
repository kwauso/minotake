import React, { useState } from 'react';
import { MainLayout } from '../components/layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useApiAuth } from '../api/client';
import { useUser } from '@clerk/clerk-react';
import { Loader2 } from 'lucide-react';

// ユーザー情報の型定義
interface User {
  id: string;
  email: string;
  name?: string;
  role?: string;
}

const Settings: React.FC = () => {
  const apiAuth = useApiAuth();
  const { user: clerkUser, isLoaded } = useUser();
  const [syncInProgress, setSyncInProgress] = useState(false);
  const [syncResults, setSyncResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  
  // ユーザー情報をClerkから取得
  const user: User | undefined = isLoaded && clerkUser ? {
    id: clerkUser.id,
    email: clerkUser.primaryEmailAddress?.emailAddress || '',
    name: `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim(),
    role: (clerkUser.publicMetadata?.role as string) || 'USER'
  } : undefined;
  
  // スーパー管理者かどうかを判定
  const isSuperAdmin = user?.role?.toLowerCase() === 'super_admin';

  // Clerk同期処理
  const handleSync = async () => {
    if (!isSuperAdmin) {
      setError('この操作にはスーパー管理者権限が必要です');
      return;
    }
    
    try {
      setSyncInProgress(true);
      setError(null);
      setSyncResults(null);
      
      const response = await apiAuth.post('/clerk/sync', {
        syncUsers: true,
        syncOrganizations: true,
        clerkUserId: clerkUser?.id
      });
      
      setSyncResults(response.data.results);
    } catch (err: any) {
      console.error('同期エラー:', err);
      setError(err.response?.data?.error || '同期中にエラーが発生しました');
    } finally {
      setSyncInProgress(false);
    }
  };

  if (!isLoaded) {
    return <div className="flex h-screen items-center justify-center">読み込み中...</div>;
  }

  return (
    <MainLayout user={user}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">設定</h1>
        </div>
        
        {error && (
          <div className="rounded-md bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}
        
        <Card>
          <CardHeader>
            <CardTitle>Clerkデータ同期</CardTitle>
            <CardDescription>
              ClerkのユーザーとDAOをデータベースに同期します。この操作はスーパー管理者のみ実行できます。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              この操作により、Clerk上のユーザーとOrganizationがデータベースに同期されます。
              大量のデータがある場合は時間がかかる場合があります。
            </p>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={handleSync} 
              disabled={syncInProgress || !isSuperAdmin}
              className="w-full"
            >
              {syncInProgress ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  同期中...
                </>
              ) : (
                isSuperAdmin ? '同期実行' : '権限がありません'
              )}
            </Button>
          </CardFooter>
        </Card>
        
        {syncResults && (
          <Card>
            <CardHeader>
              <CardTitle>同期結果</CardTitle>
            </CardHeader>
            <CardContent>
              {syncResults.users && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">ユーザー同期</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">管理者ユーザー</h4>
                      <ul className="text-sm">
                        <li>合計: {syncResults.users.admins.total}</li>
                        <li>作成: {syncResults.users.admins.created}</li>
                        <li>更新: {syncResults.users.admins.updated}</li>
                        <li>スキップ: {syncResults.users.admins.skipped}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">一般ユーザー</h4>
                      <ul className="text-sm">
                        <li>合計: {syncResults.users.users.total}</li>
                        <li>作成: {syncResults.users.users.created}</li>
                        <li>更新: {syncResults.users.users.updated}</li>
                        <li>スキップ: {syncResults.users.users.skipped}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {syncResults.organizations && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">組織同期</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">組織</h4>
                      <ul className="text-sm">
                        <li>合計: {syncResults.organizations.organizations.total}</li>
                        <li>作成: {syncResults.organizations.organizations.created}</li>
                        <li>更新: {syncResults.organizations.organizations.updated}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">メンバーシップ</h4>
                      <ul className="text-sm">
                        <li>合計: {syncResults.organizations.memberships.total}</li>
                        <li>作成: {syncResults.organizations.memberships.created}</li>
                        <li>更新: {syncResults.organizations.memberships.updated}</li>
                        <li>スキップ: {syncResults.organizations.memberships.skipped}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </MainLayout>
  );
};

export default Settings; 