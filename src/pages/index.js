import Link from "next/link";

import Card from "../components/Card";
import Header from "../components/Header";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import {
  VStack,
  Button,
  Text,
  Heading,
  Flex,
  Link as ChakraLink,
  Box,
  Input,
  InputGroup,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";

export async function getStaticProps() {
  let { data, error } = await supabase
    .from("Open_Mics")
    .select("*")
    .order("START_DATE", { ascending: false }).limit(20);
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

  // data here can be filtered when it is received from props... filter according to date-fns, isMonday? to sort by weekdays... and for the "featured" I would just have to filter by a different field like "featured=true" now... of some other category I talk about with Jake...  two main filtes are by time (which handles by date-fns) and by arbitrary tags to track in

  return (
    <>
      <Container minHeight="100vh">
        <Header />

        <Box w="100%" px="2rem">
          <Heading>Find the Funny.</Heading>
          <Text>Discover your next comedy event</Text>
          <InputGroup>
            <Input borderRadius="0px" placeholder="Category" />
            <Input borderRadius="0px" placeholder="Date" />
            <Input borderRadius="0px" placeholder="Location" />
          </InputGroup>

          {/* how do I try to get these styled to a hero component? put the image in background of this....  */}
        </Box>

        <Main>
          <Flex direction="column">
            {data.map((event, i) => (
              <Card event={event} key={event["Primary-Key"]} />
            ))}
          </Flex>
        </Main>
        <DarkModeSwitch />
      </Container>
    </>
  );
}
