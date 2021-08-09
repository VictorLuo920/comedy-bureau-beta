import Link from "next/link";

import Card from "../components/Card";
import Header from "../components/Header";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { VStack, Button, Text, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";

export async function getStaticProps() {
  let { data, error } = await supabase
    .from("Open_Mics")
    .select("*")
    .order("START_DATE", { ascending: false });
  // chaining a filter here in the future to only request this week's events?
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Shows({ data }) {
  const handleSubmit = async () => {
    const { data, error } = await supabase.from("Open_Mics").insert([
      {
        EVENT_NAME: "someValue",
        RECURRENCE_RULE: "Every Saturday for four times",
      },
    ]);

    console.log(data, "creating new event!");
  };


  return (
    <>
      <Container minHeight="100vh">
        <Header />
        <Button colorScheme="red" onClick={handleSubmit}>
          Add Event
        </Button>
        <Main>
          <Flex direction="column">
            {data.map((event, i) => (
              <Card event={event} key={event['Primary-Key']} />
            ))}
          </Flex>
        </Main>
        <DarkModeSwitch />
      </Container>
    </>
  );
}
