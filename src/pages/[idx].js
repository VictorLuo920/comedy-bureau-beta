import Link from "next/link";
import { getAllEventIds, getEventData } from "../../lib/events";
import { Box, Text, Badge, Link as ChakraLink } from "@chakra-ui/react";


export default function Event({ event }) {
  return (
    <Box m={2} p={8} borderWidth="1px" minWidth="100%">
      <Text textStyle="eventName" borderBottomWidth="1px">
        {event["name"]}
      </Text>

      <Text textStyle="eventDesc">
        {event["start_date"]} @ {event["start_time"]}
      </Text>
      <Text textStyle="eventDesc" color="red">
        {event["venue"]}
      </Text>
      <Badge colorScheme="red">
        {event["cost"] && event["cost"] > 0
          ? event["cost"]
          : "Free"}
      </Badge>
      <Text whiteSpace="pre-wrap" textStyle="eventDesc">
        {event["description"]}
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
