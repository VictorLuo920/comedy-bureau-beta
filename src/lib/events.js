import { supabase } from "../utils/supabaseClient";

export async function getAllEventIds() {
  let { data, error } = await supabase.from("open_mics").select("id");

  let paths = data.map((eventId) => {
    let id = JSON.stringify(eventId["id"]);
    return { params: { id } };
  });
  
  return paths;
}

export async function getEventData(id) {
  let { data, error } = await supabase
    .from("open_mics")
    .select("*")
    .eq("id", id)
    .single();

  return data;
}
