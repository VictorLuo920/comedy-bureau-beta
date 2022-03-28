import React from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Code,
  FormErrorMessage
} from "@chakra-ui/react";
import { Select, CreatableSelect, AsyncSelect } from "chakra-react-select";
import makeAnimated from 'react-select/animated';

import { colourOptions, groupedCategories, } from "/docs/data.js";

const mappedColourOptions = colourOptions.map((option) => ({
  ...option,
  colorScheme: option.value
}));


export const DropDownCatSelect = (props) => (
  <Container mb={16}>
    <FormControl p={4}>
      <FormLabel>
        Category
      </FormLabel>
      <Select
         isMulti
         options={groupedCategories}
         placeholder="Select A Category..."
         closeMenuOnSelect={false}
         selectedOptionStyle="check"
         hideSelectedOptions={false}
         
      />
    </FormControl>
  </Container>
);
