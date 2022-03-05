import { format } from "date-fns";
import Link from "next/link";

import { Text, Flex, Link as ChakraLink } from "@chakra-ui/react";

export const EventListing = ({ event }) => {
  let month = format(new Date(event["START_DATE"]), "MMM");
  let date = format(new Date(event["START_DATE"]), "d");

  return (
    <Flex m={2} p={2} borderWidth="1px">
      <Flex direction="column">
        <Text>{month}</Text>
        <Text>{date}</Text>
      </Flex>

      <Flex direction="column">
        <Link href={`/shows/${event["Primary-Key"]}`}>
          <ChakraLink>
            <Text textStyle="eventName" borderBottomWidth="1px">
              {event["EVENT_NAME"]}
            </Text>
          </ChakraLink>
        </Link>

        <Text textStyle="eventDesc">
          {event["START_TIME"]} - {event["END_TIME"]}
        </Text>

        <Text textStyle="eventDesc" color="red">
          {event["VENUE"]}
        </Text>
      </Flex>
    </Flex>
  );
};
