import Image from "next/image";
import React, { useState, useRef, forwardRef,  } from "react";

import {
  Box,
  Text,
  Flex,
  Heading,
  Input,
  InputGroup,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  FormControl,
  FormLabel,
  Code,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ChevronDownIcon, PhoneIcon } from '@chakra-ui/icons';
import { Select, CreatableSelect, AsyncSelect, className, ClassNamePrefix, makeAnimated } from "chakra-react-select";
import { categoryOptions, locationOptions, groupedCountries, menuList } from "/docs/data.js";



export const Hero = () => (
  <Box w="100%" px="2rem">
    <div className="jakeimg">
          <Image src="/jake.png" width="164px" height="164px" />
    </div>
    <Heading>Find the Funny.</Heading>
    <Text>Discover your next comedy event</Text>
    <InputGroup w="100%" my={1}>
      <Flex w="100%" direction="column">
      <FormControl>
      <FormLabel>
        Select a Category
      </FormLabel>
      <Select
        name="Categories"
        isMulti
        options={categoryOptions}
        placeholder="Select a category..."
        closeMenuOnSelect={false}
        //menuIsOpen
        size="lg"
      />
    </FormControl>
        {/* category here: this search bar needs to fire a function that returns data based on corresponding tags in organization... */}
      </Flex>

{/* Start of date picker here */}
      <Flex w="100%" direction="column">
      
      </Flex>

      <Flex w="100%" direction="column">
        <FormControl>
      <FormLabel>
        Select a Location
      </FormLabel>
      <Select
        name="Locations"
        options={locationOptions}
        placeholder="Select a location..."
        closeMenuOnSelect={false}
        size="lg"
      />
    </FormControl>
        <FormLabel px="1rem">Location</FormLabel>
        <Input borderRadius="0px" placeholder="Location" />
        {/* This corresponds to a Location field, and should refer to its own table? */}
        <Button size="xl">Button</Button>
      </Flex>
    </InputGroup>
  </Box>
);

