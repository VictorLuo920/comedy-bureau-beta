import { format, parse } from "date-fns";
import Link from "next/link";

import { Text, Flex, Link as ChakraLink } from "@chakra-ui/react";

export const EventCard = ({ event }) => {
  let month = format(new Date(event["start_date"].replace(/-/g, '\/').replace(/T.+/, '')), "MMM");
  let date = format(new Date(event["start_date"].replace(/-/g, '\/').replace(/T.+/, '')), "d");
 
  return (
    <Flex m={2} p={2} borderWidth="1px">
      <Flex direction="column" p={2}>
        <Text>{month}</Text>
        <Text>{date}</Text>
      </Flex>

      <Flex direction="column">
        <Link href={`/shows/${event["id"]}`}>
          <ChakraLink>
            <Text textStyle="eventName" borderBottomWidth="1px" pb={1}>
              {event["name"]}
            </Text>
          </ChakraLink>
        </Link>

        <Text textStyle="eventDesc">
          {event["start_time"]} - {event["end_time"]}
        </Text>

        <Text textStyle="eventDesc" color="red">
          {event["venue"]}
        </Text>
      </Flex>
    </Flex>
  );
};

