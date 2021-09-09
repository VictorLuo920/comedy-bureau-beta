import Link from "next/link";
import Image from "next/image";

import {
  Box,
  Text,
  Badge,
  Link as ChakraLink,
  AspectRatio,
  SlideFade,
} from "@chakra-ui/react";

//The Card component needs to follow a basic 3/4 ratio of an image box... with teh floaty text image.
const Card = ({ event }) => {
  return (
    <Box m={2} p={2} borderWidth="1px">
      <AspectRatio pos="relative" maxW="120px" ratio={3 / 4}>
        <Image src="/jake.png" objectFit="cover" layout="fill"/>
      </AspectRatio>

      <Link href={`/shows/${event["Primary-Key"]}`}>
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
