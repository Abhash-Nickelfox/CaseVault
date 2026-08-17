import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '[supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY — falling back to a stub client. Set these in your .env file.',
  )
}

// Falls back to a stub client so the app can still render (with empty data)
// when Supabase env vars are not configured, instead of crashing at import time.
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createStubClient()

function createStubClient() {
  const noop = async () => ({ data: null, error: new Error('Supabase is not configured') })
  return {
    from: () => ({
      select: noop,
      insert: noop,
      update: noop,
      delete: noop,
    }),
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      signInWithPassword: noop,
      signOut: async () => ({ error: null }),
    },
  }
}
