import { createRootRoute, Outlet } from '@tanstack/react-router'
import { handleAuthRedirect } from '../lib/auth'

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: async ({ location }) => {
    if (location.pathname === '/') {
      await handleAuthRedirect();
    }
  },
})

function RootComponent() {
  return <Outlet />
}
