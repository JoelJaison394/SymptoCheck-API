import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qycaossozytsnhdmgohi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5Y2Fvc3Nvenl0c25oZG1nb2hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ5NTk0NDYsImV4cCI6MjAxMDUzNTQ0Nn0.87yxLe9xld1Ua7VZxAc14z573R4rPUPsM6yyZDf8TQ8' 

export const supabase = createClient(supabaseUrl, supabaseKey)