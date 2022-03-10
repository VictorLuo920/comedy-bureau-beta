import { EventCard } from "../components/EventCard";
import { Hero } from "../components/Hero";
import { SimpleGrid } from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";
import { getOccurrences } from "../utils/dateTimeUtil";
import { useState, useEffect } from "react";
import { format } from "date-fns";

export async function getStaticProps() {
  let { data, error } = await supabase.from("open_mics").select("*");
  // .order("START_DATE", { ascending: true })
  // .limit(20);

  return {
    props: { data },
  };
}

export default function Shows({ data }) {
  let [openMics, setOpenMics] = useState([]);

  useEffect(() => {
    let initialState = [];
    data.forEach((event) => {
      if (event.is_recurring) {
        let occurrences = getOccurrences(event.recurrence);
        let eventInstances = occurrences.map((date) => {
          let dateString = format(date, "yyyy-MM-dd")
          return { ...event, start_date: dateString };
        });
        initialState.push(...eventInstances);
      } else {
        initialState.push(event)
      }
    });
    initialState.sort((evt1, evt2) => { return evt1['start_date'] - evt2['start_date'] })
    console.log(initialState)
    setOpenMics(initialState)
  }, []);

  return (
    <>
      <Hero />
      <SimpleGrid columns={{ sm: 1, lg: 4 }} spacing={5}>
        {openMics.map((event, i) => (
          // <EventListing event={event} key={event["id"]} />
          <EventCard event={event} key={i} />
        ))}
      </SimpleGrid>
    </>
  );
}
