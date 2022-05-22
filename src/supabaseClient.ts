import { createClient } from "@supabase/supabase-js";
// eslint-disable-next-line no-undef
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string;

// eslint-disable-next-line no-undef
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
