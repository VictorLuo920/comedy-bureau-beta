import React from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Code,
  FormErrorMessage
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { colourOptions, locationOptions } from "/docs/data.js";

const mappedColourOptions = colourOptions.map((option) => ({
  ...option,
  colorScheme: option.value
}));


export const DropDownLocSelect = (props) => (
  <Container mb={16}>
    <FormControl p={4}>
      <FormLabel>
        Location
      </FormLabel>
      <Select
        name="location"
        options={locationOptions}
        placeholder="Select your location..."
        closeMenuOnSelect={false}
        size="md"
        
      />
    </FormControl>
  </Container>
);
