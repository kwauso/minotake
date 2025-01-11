import { createRootRoute, Outlet, redirect } from '@tanstack/react-router'
import { supabase } from '../lib/supabase'

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: async () => {
    const { data: { session } } = await supabase.auth.getSession()
    const isAuthenticated = !!session

    // ルートパスの場合のみリダイレクト
    if (window.location.pathname === '/') {
      if (isAuthenticated) {
        throw redirect({ to: '/comingsoon' })
      } else {
        throw redirect({ to: '/waitinglist' })
      }
    }
  },
})

function RootComponent() {
  return <Outlet />
}
