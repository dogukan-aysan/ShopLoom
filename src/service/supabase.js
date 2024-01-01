import { createClient } from "@supabase/supabase-js";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoZHNlb2NydG1uaXp3ZmRjam1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3MzQ4NDksImV4cCI6MjAxODMxMDg0OX0.t6itEDO4fnJVKnkgdJh9BZDjSSptpt6kK8_NtV-K1dw";
const supabaseUrl = "https://qhdseocrtmnizwfdcjmh.supabase.co";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
