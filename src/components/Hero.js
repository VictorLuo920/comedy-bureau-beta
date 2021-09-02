import Image from "next/image";
import {
  Box,
  Text,
  Flex,
  Heading,
  Input,
  InputGroup,
  FormLabel,
} from "@chakra-ui/react";

export const Hero = () => (
  <Box w="100%" px="2rem">
    <Heading>Find the Funny.</Heading>
    <Text>Discover your next comedy event</Text>
    <InputGroup w="100%" my={1}>
      <Flex w="100%" direction="column">
        <FormLabel px="1rem">Category</FormLabel>
        <Input borderRadius="0px" placeholder="Category" />
      </Flex>
      <Flex w="100%" direction="column">
        <FormLabel px="1rem">Date</FormLabel>
        <Input borderRadius="0px" placeholder="Date" />
      </Flex>
      <Flex w="100%" direction="column">
        <FormLabel px="1rem">Location</FormLabel>
        <Input borderRadius="0px" placeholder="Location" />
      </Flex>
    </InputGroup>
    <Image src="/jake.png" width="64px" height="64px" alt="jake" />
    {/* how do I try to get these styled to a hero component? put the image in background of this....  */}
  </Box>
);

export default Hero;
