import { EventListing } from "../components/EventListing";
import { Hero } from "../components/Hero";
import { SimpleGrid } from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";

export async function getStaticProps() {
  let { data, error } = await supabase
    .from("Open_Mics")
    .select("*")
    .order("START_DATE", { ascending: false })
    .limit(20);

  return {
    props: { data }, 
  };
}

export default function Shows({ data }) {
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
