import { EventCard } from "../components/EventCard";
import { Hero } from "../components/Hero";
import { SimpleGrid } from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";
import { getOccurrences, getDateTimeString } from "../utils/dateTimeUtil";
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
  let [filters, setFilters] = useState({});
  const router = useRouter();
  // console.log(filters);
  // okay, this works, query object gets console.logged with every route force change on the front end...
  useEffect(() => {
    let { page = 1, size = 20 } = router.query;

    let slice = computedData.slice(
      (parseInt(page) - 1) * parseInt(size),
      parseInt(page) * parseInt(size)
    );

    setOpenMics(slice);
  }, [router.query]);

  useEffect(() => {
    let filteredData = computedData.filter((event) => {
      let startDate = getDateTimeString(event["start_date"], event["start_time"]);
      let filterDate = new Date(filters.date);
  
      return (
        (startDate.getDate() === filterDate.getDate() &&
          startDate.getMonth() === filterDate.getMonth() &&
          startDate.getFullYear() === filterDate.getFullYear()) ||
        startDate > filterDate
      );
    });
    console.log(filteredData[0]);
  }, [filters]);

  function getFilters(category, date, location) {
    setFilters({
      category: category,
      date: date,
      location: location,
    });
  }

  return (
    <>
      <Hero getFilters={getFilters} />
      <SimpleGrid columns={{ sm: 1, lg: 4 }} spacing={5}>
        {openMics.map((event, i) => (
          <EventCard event={event} key={i} />
        ))}
      </SimpleGrid>
      <Pagination total={computedData.length} />
    </>
  );
}
