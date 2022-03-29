import { DatePicker } from "react-datepicker";
import { chakra } from "@chakra-ui/react";

const StyledaDatepicker = chakra(DatePicker);

export const DatePicker = (props) => (
  <StyledaDatepicker w="100%" bg="blue.100" {...props} />
);