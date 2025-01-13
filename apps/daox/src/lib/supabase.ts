import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL) as string;
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY) as string;

if (!supabaseUrl || supabaseUrl === 'undefined') {
  throw new Error('Missing VITE_SUPABASE_URL');
}
if (!supabaseAnonKey || supabaseAnonKey === 'undefined') {
  throw new Error('Missing VITE_SUPABASE_ANON_KEY');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
  }
}); 