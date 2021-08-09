import { supabase } from "../utils/supabaseClient";

export async function getAllEventIds() {
  let { data, error } = await supabase.from("Open_Mics").select("Primary-Key");

  let paths = data.map((eventId) => {
    let id = JSON.stringify(eventId["Primary-Key"]);
    return { params: { id } };
  });
  
  return paths;
}

export async function getEventData(id) {
  let { data, error } = await supabase
    .from("Open_Mics")
    .select("*")
    .eq("Primary-Key", id)
    .single();

  return data;
}
