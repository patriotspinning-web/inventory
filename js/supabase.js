import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://xkutxclbslyigkoeddbm.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrdXR4Y2xic2x5aWdrb2VkZGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU0ODk0NzUsImV4cCI6MjEwMTA2NTQ3NX0.4vrWNqjXdVqKWEygVcwVa05cDRh9NN69-I6cgoSng2E";

export const supabase = createClient(supabaseUrl, supabaseKey);
