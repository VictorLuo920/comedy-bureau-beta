import { Card } from "../components/Card";
import { EventListing } from "../components/EventListing";
import { Header } from "../components/Header";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";

export async function getStaticProps() {
  let { data, error } = await supabase
    .from("Open_Mics")
    .select("*")
    .order("START_DATE", { ascending: false })
    .limit(20);

  // here in getStaticProps, the data from the backend is requested and retrieved in one big dump, one big array, nicely sorted by chaining filter methods.
  // topics to address: 1. for search purposes, does it make sense to dump all the data into the client front end, use React's setState to set that data clump to State, and use various functions that return different "filtered views" of the data...
  // the container then has to rememember the "full set" (which can be turned back to) and the "filtered set" and "filtered view"

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Shows({ data }) {
  // data here can be filtered when it is received from props... filter according to date-fns, isMonday? to sort by weekdays... and for the "featured" I would just have to filter by a different field like "featured=true" now... of some other category I talk about with Jake...  two main filtes are by time (which handles by date-fns) and by arbitrary tags to track in
  return (
    <>
      <Hero />

      <SimpleGrid columns={4} spacing={5}>
        {data.map((event, i) => (
          <EventListing event={event} key={event["Primary-Key"]} />
        ))}
      </SimpleGrid>

    </>
  );
}
