import { useEffect } from 'react';
import { useNavigate, redirect } from '@tanstack/react-router';
import { supabase } from './supabase';
import { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { TOP_ROUTES, RoutePath } from '../constants/routes';

export function useAuthGuard(redirectTo: RoutePath, whenAuthenticated: boolean) {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const isAuthenticated = !!session;

      if (whenAuthenticated === isAuthenticated) {
        navigate({ to: redirectTo });
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
      const isAuthenticated = !!session;
      if (whenAuthenticated === isAuthenticated) {
        navigate({ to: redirectTo });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, redirectTo, whenAuthenticated]);
}

export async function requireAuth(redirectTo: RoutePath = TOP_ROUTES.UNAUTHED_TOP) {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    throw redirect({ to: redirectTo });
  }
  return { session };
}

export async function handleAuthRedirect() {
  const { data: { session } } = await supabase.auth.getSession();
  const isAuthenticated = !!session;

  if (isAuthenticated) {
    throw redirect({ to: TOP_ROUTES.AUTHED_TOP });
  } else {
    throw redirect({ to: TOP_ROUTES.UNAUTHED_TOP });
  }
}
