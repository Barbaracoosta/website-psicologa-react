
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wfpxgwamovqkahhmjbel.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmcHhnd2Ftb3Zxa2FoaG1qYmVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NzYyMDQsImV4cCI6MjA5MjQ1MjIwNH0.KlZB31p7O--BM-UHifASkwUvXhahrFi0R0Sth988wL0'

export const supabase = createClient(supabaseUrl, supabaseKey)