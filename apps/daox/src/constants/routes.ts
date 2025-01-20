import type { FileRouteTypes } from '../routeTree.gen';

export type RoutePath = FileRouteTypes['to'];

// パスの定数を型安全に定義
export const ROUTE_PATHS = {
  COMING_SOON: '/comingsoon',
  WAITING_LIST: '/waitinglist',
} as const satisfies Record<string, RoutePath>;

// トップページのルート定数（認証状態に応じて）
export const TOP_ROUTES = {
  AUTHED_TOP: ROUTE_PATHS.COMING_SOON,    // 認証済みユーザーのトップページ
  UNAUTHED_TOP: ROUTE_PATHS.WAITING_LIST, // 未認証ユーザーのトップページ
} as const;
