import { createClient } from "@supabase/supabase-js";
import { RRule, rrulestr } from "rrule";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

const recurringEventsHandler = (payload) => {
  let rule = RRule.parseText("Every Saturday for four times");
  let {
    new: { EVENT_NAME, RECURRENCE_RULE },
  } = payload; // extract the r_rule from the payload?

  console.log(EVENT_NAME, RECURRENCE_RULE, rule);
};

const recurringEventsSubscription = supabase
  .from("Open_Mics")
  .on("INSERT", recurringEventsHandler)
  .subscribe();
