import Card from "../components/Card";
import { VStack } from "@chakra-ui/react";
import { supabase } from '../utils/supabaseClient'

export async function getStaticProps() {
  let { data, error } = await supabase.from("Open_Mics").select("*");

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Shows({ data }) {
  return (
    <VStack display="flex" m={2} maxW="75%">
      {data.map((event, i) => (
        <Card event={event} key={i} />
      ))}
    </VStack>
  );
}
