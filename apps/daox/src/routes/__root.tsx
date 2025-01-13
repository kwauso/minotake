import { createRootRoute, Outlet, redirect } from '@tanstack/react-router'
import { supabase } from '../lib/supabase'

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: async ({ location }) => {
    const { data: { session } } = await supabase.auth.getSession()
    const isAuthenticated = !!session

    // ルートパス（/）へのアクセス時、認証状態に応じてリダイレクト
    if (location.pathname === '/') {
      if (isAuthenticated) {
        throw redirect({ to: '/comingsoon' })
      } else {
        throw redirect({ to: '/waitinglist' })
      }
    }

    // その他のパスの場合の認証チェック
    if (!isAuthenticated && location.pathname !== '/waitinglist') {
      throw redirect({ to: '/waitinglist' })
    }
  },
})

function RootComponent() {
  return <Outlet />
}
