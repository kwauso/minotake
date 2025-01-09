import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { supabase } from './supabase';
import { AuthChangeEvent, Session } from '@supabase/supabase-js';

export function useAuthGuard(redirectTo: string, whenAuthenticated: boolean) {
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