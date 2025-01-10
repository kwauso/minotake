import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useAuthGuard } from '../lib/auth';

export const Route = createFileRoute('/waitinglist')({
  component: WaitingList,
});

export default function WaitingList() {
  useAuthGuard('/comingsoon', true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;
      setIsSignedUp(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : '登録中にエラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  if (isSignedUp) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-gray-900">
              ウェイティングリストに登録、アプリケーションの登録用のメールを送信しました
            </h2>
            <p className="text-lg text-gray-600">
              開設時に、お知らせメールをお届けします。<br />
              もう少々お待ちください
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white p-8 rounded-lg shadow-md space-y-8">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              ウェイティングリスト・アプリに登録
            </h2>
          </div>
          <form className="space-y-6" onSubmit={handleSignUp}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  メールアドレス
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="メールアドレス"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  パスワード
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="パスワード"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? 'Loading...' : 'ウェイティングリストに登録'}
              </button>
            </div>
          </form>
        </div>
        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            すでにウェイティングリスト登録済みの方はこちら
          </Link>
        </div>
      </div>
    </div>
  );
} 