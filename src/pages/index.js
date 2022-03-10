import { EventCard } from "../components/EventCard";
import { Hero } from "../components/Hero";
import { SimpleGrid } from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";
import { getOccurrences } from "../utils/dateTimeUtil";
import { useState } from "react";

export async function getStaticProps() {
  let { data, error } = await supabase
    .from("open_mics")
    .select("*")
    // .order("START_DATE", { ascending: true })
    // .limit(20);

  return {
    props: { data }, 
  };
}

export default function Shows({ data }) {
  let initialState = []
  data.forEach((event) => {
    if (event.is_reccurring) {
      let occurences = getOccurrences(event.recurrence)
      let eventInstances = occurences.map( (date) => {
        let dateString = date.toString().slice(0, 10)
        return {...event, start_date: dateString}
      })
      console.log(eventInstances)
      initialState.push(...eventInstances)
    }
  })
  

  return (
    <>
      <Hero />
      <SimpleGrid columns={{sm: 1, lg: 4}} spacing={5}>
        {data.map((event, i) => (
          // <EventListing event={event} key={event["id"]} />
            <EventCard event={event} key={event["id"]}/> 
        ))}
      </SimpleGrid>
    </>
  );
}
