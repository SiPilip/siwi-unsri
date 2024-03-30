import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dakavexztkrvdshmzlpx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRha2F2ZXh6dGtydmRzaG16bHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1NTYxODIsImV4cCI6MjAyNzEzMjE4Mn0.YOUcmlBt9pBXTbOlqQeMGZ5TNjppUfiaqwrlXuATFeo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
