import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://spaaxaahzjzwuycewhex.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwYWF4YWFoemp6d3V5Y2V3aGV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2OTI4MzgsImV4cCI6MjAyNTI2ODgzOH0.6CqRxoqm3xJrX1HBoSFww82HYezfDX9SMpxB0kDs11A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
