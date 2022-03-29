import React from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Code,
  FormErrorMessage
} from "@chakra-ui/react";
import { Select, CreatableSelect, AsyncSelect } from "chakra-react-select";
import { groupedOptions, colourOptions, groupedCountries } from "/docs/data";

const mappedColourOptions = colourOptions.map((option) => ({
  ...option,
  colorScheme: option.value
}));
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}



export const SlidingMenu = (props) => (


  <Container mb={16}>
    <FormControl p={4}>
      <FormLabel>
        Single Select Colors and Flavours <Code>size="sm"</Code>
      </FormLabel>
      <Select
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
        size="sm"
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Select Colors and Flavours <Code>size="md" (default)</Code>
      </FormLabel>
      <Select
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Select Colors and Flavours <Code>size="lg"</Code>
      </FormLabel>
      <Select
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
        size="lg"
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>Async Select</FormLabel>
      <AsyncSelect
        isMulti
        name="colors"
        options={[...groupedOptions, ...groupedOptions]}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
        size="md"
        loadOptions={(inputValue, callback) => {
          setTimeout(() => {
            const values = colourOptions.filter((i) =>
              i.label.toLowerCase().includes(inputValue.toLowerCase())
            );
            callback(values);
          }, 3000);
        }}
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Select Colors and Flavours (With global <Code>colorScheme</Code>)
      </FormLabel>
      <Select
        isMulti
        name="colors"
        colorScheme="purple"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Select Colors and Flavours (With <Code>colorScheme</Code> in each
        option)
      </FormLabel>
      <Select
        isMulti
        name="colors"
        options={mappedColourOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>Select with creatable options</FormLabel>
      <CreatableSelect
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
    </FormControl>

    <FormControl p={4} isDisabled>
      <FormLabel>
        Disabled select from the <Code>FormControl</Code>
      </FormLabel>
      <Select
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Disabled select from the <Code>Select</Code> element itself
      </FormLabel>
      <Select
        isDisabled
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
    </FormControl>

    <FormControl p={4} isInvalid>
      <FormLabel>
        Invalid select from the <Code>FormControl</Code>
      </FormLabel>
      <Select
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
      <FormErrorMessage>
        This error message shows because of an invalid FormControl
      </FormErrorMessage>
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Invalid select from the <Code>Select</Code> element itself
      </FormLabel>
      <Select
        isInvalid
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
      <FormErrorMessage>
        You can't see this error message because the isInvalid prop is set on
        the select element instead of the form control
      </FormErrorMessage>
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Multi Select with <Code>hasStickyGroupHeaders</Code>
      </FormLabel>
      <Select
        isMulti
        options={groupedCountries}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
        hasStickyGroupHeaders
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Single Select with <Code>selectedOptionStyle="check"</Code>
      </FormLabel>
      <Select
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
        selectedOptionStyle="check"
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Multi Select with <Code>selectedOptionStyle="check"</Code>
      </FormLabel>
      <Select
        isMulti
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
        selectedOptionStyle="check"
        hideSelectedOptions={false}
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Single Select with <Code>selectedOptionColor="green"</Code>
      </FormLabel>
      <Select
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
        selectedOptionColor="green"
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Multi Select with <Code>selectedOptionColor="green"</Code>
      </FormLabel>
      <Select
        isMulti
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
        selectedOptionColor="green"
        hideSelectedOptions={false}
      />
    </FormControl>
  </Container>
);
