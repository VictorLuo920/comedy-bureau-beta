import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

const recurringEventsSubscription = supabase
  .from("Open_Mics")
  .on("INSERT", (payload) => {
    console.log("Change received!", payload);
  })
  .subscribe();

const recurringEventsHandler = async (payload) => {
  const { r_rule } = payload; // extract the r_rule from the payload?
};
