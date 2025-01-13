import { createFileRoute, redirect } from '@tanstack/react-router'
import { Route as rootRoute } from './__root'
import { Route as ComingsoonRoute } from './comingsoon'
import { Route as WaitinglistRoute } from './waitinglist'
import { Route as LoginRoute } from './login'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({ to: '/login' })
  },
})

export const routeTree = rootRoute.addChildren([
  Route,
  ComingsoonRoute,
  WaitinglistRoute,
  LoginRoute,
])