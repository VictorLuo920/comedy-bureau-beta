import Link from "next/link";
import { Box, Text, Badge, Link as ChakraLink } from "@chakra-ui/react";

const Card = ({ event }) => {
  return (
    <Box m={2} p={2} borderWidth="1px">
      <Link href={`/${event["Primary-Key"]}`}>
        <ChakraLink>
          <Text textStyle="eventName" borderBottomWidth="1px">
            {event["EVENT_NAME"]}
          </Text>
        </ChakraLink>
      </Link>

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
    </Box>
  );
};

export default Card;
