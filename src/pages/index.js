import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Flex } from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";

export async function getStaticProps() {
  let { data, error } = await supabase
    .from("Open_Mics")
    .select("*")
    .order("START_DATE", { ascending: false })
    .limit(20);
  // chaining a filter here in the future to only request this week's events?
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Shows({ data }) {
  // data here can be filtered when it is received from props... filter according to date-fns, isMonday? to sort by weekdays... and for the "featured" I would just have to filter by a different field like "featured=true" now... of some other category I talk about with Jake...  two main filtes are by time (which handles by date-fns) and by arbitrary tags to track in

  return (
    <>
      <Container minHeight="100vh">
        <Header />
        <Hero />

        <Main>
          <Flex direction="row" wrap="wrap">
            {data.map((event, i) => (
              <Card event={event} key={event["Primary-Key"]} />
            ))}
          </Flex>
        </Main>
        <DarkModeSwitch />
        <Footer />
      </Container>
    </>
  );
}
