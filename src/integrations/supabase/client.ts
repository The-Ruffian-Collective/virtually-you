// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://afyiziskffuuqdeqetpj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmeWl6aXNrZmZ1dXFkZXFldHBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0OTgyODIsImV4cCI6MjA1MjA3NDI4Mn0.3hyog3fijOE6vRkPtq8r2XTz1ckRrWdiE_mjFX_SOKI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);