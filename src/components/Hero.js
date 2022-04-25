import Image from "next/image";
import { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Heading,
  InputGroup,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { categoryOptions, locationOptions } from "/docs/data.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

export const Hero = ({getFilters}) => {
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [locationFilters, setLocationFilters] = useState([]);
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  return (
    <Box w="100%" px="2rem" paddingBottom={"90"} position={"relative"}>
      <div className="jakeimg">
        <Image src="/jake.png" width="256" height="294" />
      </div>
      <Heading fontSize={"5xl"}>Find the Funny.</Heading>
      <Text paddingY={"5"} fontSize={"x-large"}>
        Discover your next comedy event
      </Text>
      <InputGroup
        w="90%"
        height={79}
        my={1}
        border="1px"
        borderColor="ActiveCaption"
        borderRadius={"lg"}
        p={0}
        backgroundColor={"gray.50"}
      >
        <Flex w="100%" direction="column">
          <FormControl className="dividerLine" borderColor="ActiveCaption">
            <FormLabel>Category</FormLabel>
            <Select
              name="Categories"
              borderColor="none"
              focusBorderColor="none"
              isMulti
              options={categoryOptions}
              placeholder="Select a category"
              closeMenuOnSelect={true}
              onChange={(options) => setCategoryFilters(options)}
              //menuIsOpen
              size="sm"
              className="catDropDownInput"
            />
          </FormControl>
          {/* category here: this search bar needs to fire a function that returns data based on corresponding tags in organization... */}
        </Flex>

        {/* Start of date picker here */}
        <Flex w="100%" direction="column">
          <FormControl className="dividerLine" borderColor="ActiveCaption">
            <FormLabel fontSize={"sm"}>Your Date</FormLabel>
            <DatePicker
              calendarClassName="tcb-date-class"
              className="DatePickerInput"
              placeholderText="Add a date and time"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              //timeFormat="HH:mm"
              injectTimes={[
                setHours(setMinutes(new Date(), 1), 0),
                setHours(setMinutes(new Date(), 5), 12),
                setHours(setMinutes(new Date(), 59), 23),
              ]}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </FormControl>
        </Flex>

        <Flex w="100%" direction="column">
          <FormControl borderColor="ActiveCaption">
            <FormLabel>Location</FormLabel>
            <Select
              borderColor="none"
              focusBorderColor="none"
              name="Locations"
              options={locationOptions}
              onChange={(options) => setLocationFilters(options)}
              placeholder="Select your location"
              closeMenuOnSelect={true}
              size="sm"
              //menuIsOpen
            />
          </FormControl>
          {/* This corresponds to a Location field, and should refer to its own table? */}
        </Flex>
        <Flex direction="column">
          <FormControl borderColor="ActiveCaption">
            <FormLabel textAlign={"left"}>
              <Box
                as="button"
                p={4}
                color="white"
                fontWeight="bold"
                borderRadius="md"
                bgGradient="linear(to-l, gray.900, red.500)"
                _hover={{
                  bgGradient: "linear(to-r, red.500, yellow.500)",
                }}
                onClick={() => getFilters(categoryFilters, startDate, locationFilters)}
              >
                Search
              </Box>
            </FormLabel>
          </FormControl>
        </Flex>
      </InputGroup>
    </Box>
  );
};
