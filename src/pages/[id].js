import Link from "next/link";
import { getAllEventIds, getEventData } from "../lib/events";

import { Link as ChakraLink, Box, Text, Heading } from "@chakra-ui/react";
import { Container } from "../components/Container";

export default function Event({ eventData }) {
  return <Text>{eventData["EVENT_NAME"] || "nothing here"}</Text>;
}

export async function getStaticPaths() {
  const paths = await getAllEventIds();
  
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const eventData = await getEventData(params.id);
  return {
    props: {
      eventData,
    },
  };
}
