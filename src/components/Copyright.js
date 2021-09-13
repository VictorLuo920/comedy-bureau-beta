import { Text } from '@chakra-ui/layout'

export const Copyright = (props) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} The Comedy Bureau, Inc. All rights reserved.
  </Text>
)
