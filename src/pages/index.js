import { EventCard } from "../components/EventCard";
import { Hero } from "../components/Hero";
import { SimpleGrid } from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";
import { getOccurrences } from "../utils/dateTimeUtil";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { useRouter } from "next/router";
import Pagination from "@etchteam/next-pagination";

export async function getStaticProps() {
  let { data, error } = await supabase.from("open_mics").select("*");

  let computedData = [];
  data.forEach((event) => {
    if (event.is_recurring) {
      let occurrences = getOccurrences(event.recurrence);
      let eventInstances = occurrences.map((date) => {
        let dateString = format(date, "yyyy-MM-dd");
        return { ...event, start_date: dateString };
      });
      computedData.push(...eventInstances);
    } else {
      computedData.push(event);
    }
  });
  computedData.sort((evt1, evt2) => {
    return new Date(evt1["start_date"]) - new Date(evt2["start_date"]);
  });

  return {
    props: { computedData },
  };
}

export default function Shows({ computedData }) {
  let [openMics, setOpenMics] = useState([]);
  const router = useRouter();
  // okay, this works, query object gets console.logged with every route force change on the front end...
  useEffect(() => {
    let { page = 1, size = 20 } = router.query;

    let slice =
      page <= 1
        ? computedData.slice(0, size + 1)
        : computedData.slice((page - 1) * size + 1, page * size + 1);

    setOpenMics(slice)
  }, [router.query]);

 
  return (
    <>
      <Hero />
      <SimpleGrid columns={{ sm: 1, lg: 4 }} spacing={5}>
        {openMics.map((event, i) => (
          <EventCard event={event} key={i} />
        ))}
      </SimpleGrid>
      <Pagination total={computedData.length} />
    </>
  );
}
