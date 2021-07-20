import Card from "../components/Card";
import Header from "../components/Header";
import { VStack, Container, Button, Text } from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";

export async function getStaticProps() {
  let { data, error } = await supabase
    .from("Open_Mics")
    .select("*")
    .order("START_DATE", { ascending: false });

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Shows({ data }) {
  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from("Open_Mics")
      .insert([{ "EVENT_NAME" : "someValue" }]);
    
      console.log(data, 'creating new event!')
  };

  return (
    <>
      <Header />
      <Container maxW="container.xl">
        <Button colorScheme="red" onClick={handleSubmit}>Add Event</Button>
        <VStack display="flex" m={2}>
          {data.map((event, i) => (
            <Card event={event} key={i} />
          ))}
        </VStack>
      </Container>
    </>
  );
}
