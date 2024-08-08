/*import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://btwgiirhqddpksrwbair.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0d2dpaXJocWRkcGtzcndiYWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwODM0ODIsImV4cCI6MjAzODY1OTQ4Mn0.JZ7QqzfBklhQkGXgHlJEzwFaXJBboaA6gS3sgD-7Lyc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
*/
// /src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
