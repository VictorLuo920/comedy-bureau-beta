import { Box, Text, Badge, Link as ChakraLink } from "@chakra-ui/react";

const Layout = ({ Component }) => {
  return (
    <Box>
      <Component />
      {/* This needs to spread out the passed in "sections" as components, and lay them out with CSS style props...  */}
    </Box>
  );
};

export default Layout;
