import { Box, Text, Badge } from "@chakra-ui/react";

const Card = ({event}) => {
  return (
    <Box m={2} borderWidth="1px" w="100%">
      <Text
        textTransform="uppercase"
        fontSize="lg"
        fontWeight="bold"
        color="red"
      >
        {event["EVENT_NAME"]}
      </Text>
      <Text textTransform="uppercase" fontSize="sm" fontWeight="bold">
        {event["START_TIME"]}
      </Text>
      <Text
        textTransform="uppercase"
        fontSize="sm"
        fontWeight="bold"
        color="red"
      >
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
