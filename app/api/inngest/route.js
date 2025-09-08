import { inngest } from "@/lib/inngest/client";
import { serve } from "inngest/next";

import { generateIndustryInsights } from "@/lib/inngest/function";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [generateIndustryInsights],
}); 
