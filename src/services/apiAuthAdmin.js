import { createClient } from "@supabase/supabase-js";

const supabase = createClient(supabase_url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

// Access auth admin api
// const adminAuthClient = supabase.auth.admin.
