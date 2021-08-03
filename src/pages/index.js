import Card from "../components/Card";
import Header from "../components/Header";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
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
      .insert([
        {
          EVENT_NAME: "someValue",
          RECURRENCE_RULE: "Every Saturday for four times",
        },
      ]);

    console.log(data, "creating new event!");
  };

  return (
    <>
      <Header />
      <Container minHeight="100vh" maxW="container.xl">
        <Button colorScheme="red" onClick={handleSubmit}>
          Add Event
        </Button>
        <VStack display="flex" m={2}>
          {data.map((event, i) => (
            <Card event={event} key={i} />
          ))}
        </VStack>
        <DarkModeSwitch />
      </Container>
    </>
  );
}
