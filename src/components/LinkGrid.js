import { Box, Link, SimpleGrid, Stack } from '@chakra-ui/react'
import { FooterHeading } from './FooterHeading'

export const LinkGrid = (props) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Events</FooterHeading>
      <Stack>
        <Link>Find Events</Link>
        <Link>Post an Event</Link>
        <Link>Join TCB</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">About</FooterHeading>
      <Stack>
        <Link>FAQ</Link>
        <Link>Support Us</Link>
        <Link>Contact</Link>
      </Stack>
    </Box>
  </SimpleGrid>
)
