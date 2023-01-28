import { createClient } from '@supabase/supabase-js';


//To be more secure : .env file. 
const supabaseURL = 'https://scgpaptugmfkiybgrbkj.supabase.co';
const supabaseAnonKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjZ3BhcHR1Z21ma2l5YmdyYmtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4ODk2NjMsImV4cCI6MTk5MDQ2NTY2M30.dqfER4KnqhHnaK01KPiWMCwvyGGp3j14Wr8zxbarNFg'

export const supabase = createClient(supabaseURL,supabaseAnonKey)