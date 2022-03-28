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
  Select,
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
import { DropDownLocSelect, } from '/src/components/DropDownLocSelect.js'
import { DropDownCatSelect, } from '/src/components/DropDownCatSelect.js'

export const Hero = () => (
  <Box w="100%" px="2rem">
    <div className="jakeimg">
          <Image src="/jake.png" width="164px" height="164px" />
    </div>
    <Heading>Find the Funny.</Heading>
    <Text>Discover your next comedy event</Text>
    <InputGroup w="100%" my={1} sx={{ p: 2, border: '1px dashed grey', borderRadius: "md",  }} >
      <Flex w="100%" direction="column">
              <DropDownCatSelect />
        {/* category here: this search bar needs to fire a function that returns data based on corresponding tags in organization... */}
      </Flex>
      <Flex w="100%" direction="column">
      <DatePicker />
      </Flex>
      <Flex w="100%" direction="column">
           <DropDownLocSelect />
        {/* This corresponds to a Location field, and should refer to its own table? */}
      </Flex>
      <Flex w="50%" direction="column">
      <Button size="xl">Button</Button>
      </Flex>
    </InputGroup>
  </Box>
);

