import { EventCard } from "../components/EventCard";
import { Hero } from "../components/Hero";
import { SimpleGrid } from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";
import { getOccurrences } from "../utils/dateTimeUtil";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { useRouter } from 'next/router'
import Pagination from '@etchteam/next-pagination'

export async function getStaticProps() {
  let { data, error } = await supabase.from("open_mics").select("*");
 
  return {
    props: { data },
  };
}

export default function Shows({ data }) {
  let [openMics, setOpenMics] = useState([]);

  const router = useRouter()

  console.log(router.query) // okay, this works, query object gets console.logged with every route force change on the front end...

  useEffect(() => {
    let initialState = [];
    data.forEach((event) => {
      if (event.is_recurring) {
        let occurrences = getOccurrences(event.recurrence);
        let eventInstances = occurrences.map((date) => {
          let dateString = format(date, "yyyy-MM-dd");
          return { ...event, start_date: dateString };
        });
        initialState.push(...eventInstances);
      } else {
        initialState.push(event);
      }
    });
    initialState.sort((evt1, evt2) => {
      return new Date(evt1["start_date"]) - new Date(evt2["start_date"]);
    });
    setOpenMics(initialState);
  }, []);

  return (
    <>
      <Hero />
      <SimpleGrid columns={{ sm: 1, lg: 4 }} spacing={5}>
        {openMics.map((event, i) => (
          <EventCard event={event} key={i} />
        ))}
      </SimpleGrid>
      <Pagination total={1000} />  
    </>
  );
}
