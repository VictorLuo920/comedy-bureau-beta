import { Box, Text, Badge } from "@chakra-ui/react";

const Card = ({ event }) => {
  return (
    <Box m={2} p={2} borderWidth="1px">
      <Text textStyle="eventName" borderBottomWidth="1px">{event["EVENT_NAME"]}</Text>
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
