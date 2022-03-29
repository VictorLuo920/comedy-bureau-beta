import Image from "next/image";
import React, { useState, useRef, forwardRef,  } from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {
  Box,
  Text,
  Flex,
  Heading,
  Input,
  InputGroup,
  FormLabel,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  InputLeftElement,
} from "@chakra-ui/react";
import { ChevronDownIcon, PhoneIcon } from '@chakra-ui/icons';


export const Hero = () => (
  <Box w="100%" px="2rem">
    <div className="jakeimg">
          <Image src="/jake.png" width="164px" height="164px" />
    </div>
    <Heading>Find the Funny.</Heading>
    <Text>Discover your next comedy event</Text>
    <InputGroup w="100%" my={1}>
      <Flex w="100%" direction="column">
        <Menu>
              <MenuButton
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
                _hover={{ bg: 'gray.400' }}
                _expanded={{ bg: 'blue.400' }}
                _focus={{ boxShadow: 'outline' }}
              >
                Category <ChevronDownIcon />
              </MenuButton>
                <MenuList>
                  <MenuItem>Stand Up</MenuItem>
                  <MenuItem>Improv</MenuItem>
                  <MenuItem>Sketch</MenuItem>
                  <MenuItem>Screenings/Podcasts/Panels</MenuItem>
                  <MenuItem>Storytelling/Solo Shows</MenuItem>
                </MenuList>
              </Menu>
        {/* category here: this search bar needs to fire a function that returns data based on corresponding tags in organization... */}
      </Flex>
      <Flex w="100%" direction="column">
      <DatePicker />
      </Flex>
      <Flex w="100%" direction="column">
        <FormLabel px="1rem">Location</FormLabel>
        <Input borderRadius="0px" placeholder="Location" />
        {/* This corresponds to a Location field, and should refer to its own table? */}
        <Button size="xl">Button</Button>
      </Flex>
    </InputGroup>
  </Box>
);

