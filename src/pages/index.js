import { EventCard } from "../components/EventCard"
import { Hero } from "../components/Hero";
import { SimpleGrid } from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";

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
