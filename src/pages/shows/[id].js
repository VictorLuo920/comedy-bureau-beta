import Link from "next/link";
import { getAllEventIds, getEventData } from "../../lib/events";

import { Box, Text, Badge, Link as ChakraLink } from "@chakra-ui/react";


export default function Event({ event }) {
  return (
    <Box m={2} p={8} borderWidth="1px" minWidth="100%">
      <Text textStyle="eventName" borderBottomWidth="1px">
        {event["EVENT_NAME"]}
      </Text>

      <Text textStyle="eventDesc">
        {event["START_DATE"]} @ {event["START_TIME"]}
      </Text>
      <Text textStyle="eventDesc" color="red">
        {event["VENUE"]}
      </Text>
      <Badge colorScheme="red">
        {event["EVENT_COST_MICS"] && event["EVENT_COST_MICS"] !== "$0"
          ? event["EVENT_COST_MICS"]
          : "Free"}
      </Badge>
      <Text whiteSpace="pre-wrap" textStyle="eventDesc">
        {event["EVENT_DESCRIPTION"]}
      </Text>
      <Link href='/'>Home</Link>
    </Box>
  );
}

export async function getStaticPaths() {
  const paths = await getAllEventIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const event = await getEventData(params.id);
  return {
    props: {
      event,
    },
  };
}
