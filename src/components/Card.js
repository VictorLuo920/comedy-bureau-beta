import Link from "next/link";
import Image from "next/image";

import {
  Box,
  Text,
  Badge,
  Link as ChakraLink,
  AspectRatio,
  SlideFade,
  useDisclosure,
} from "@chakra-ui/react";

//The Card component needs to follow a basic 3/4 ratio of an image box... with teh floaty text image.
const Card = ({ event }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      m={2}
      p={2}
      borderWidth="1px"
      pos="relative"
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
      backgroundImage="url('/logo.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
    >
      <SlideFade in={isOpen} offsetY="20px">
        <Box w="240px">
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
      </SlideFade>
    </Box>
  );
};

export default Card;
