import { format } from "date-fns";
import { getAMPMTime } from "../utils/dateTimeUtil"
import Link from "next/link";

import { Text, Flex, Link as ChakraLink } from "@chakra-ui/react";

export const EventCard = ({ event }) => {
  let formattedDateTime = new Date(event["start_date"] + "T" + event["start_time"] + "Z")
  let endDateTime = new Date(event["start_date"] + "T" + event["end_time"] + "Z")

  let month = format(formattedDateTime, "MMM");
  let date = format(formattedDateTime, "d");
  let startTime = getAMPMTime(formattedDateTime)
  let endTime = getAMPMTime(endDateTime)

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
          {startTime} - {endTime}
        </Text>

        <Text textStyle="eventDesc" color="red">
          {event["venue"]}
        </Text>
      </Flex>
    </Flex>
  );
};

