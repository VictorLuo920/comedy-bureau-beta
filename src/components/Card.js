import { Box, Text, Badge } from "@chakra-ui/react";

const Card = ({ event }) => {
  return (
    <Box m={2} p={2} borderWidth="1px" w="100%">
      <Text textStyle="eventName">{event["EVENT_NAME"]}</Text>
      <Text textStyle="eventDesc">{event["START_TIME"]}</Text>
      <Text textStyle="eventDesc">{event["START_DATE"]}</Text>
      <Text textStyle="eventDesc" color="red">
        {event["VENUE"]}
      </Text>
      <Badge colorScheme="red">
        {event["EVENT_COST_MICS"] !== "$0" ? event["EVENT_COST_MICS"] : "Free"}
      </Badge>
      <Text>{event["EVENT_DESCRIPTION"]}</Text>
    </Box>
  );
};

export default Card;
