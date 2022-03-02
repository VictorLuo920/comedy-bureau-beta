import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

import theme from "../theme";
import { Header } from "../components/Header";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Container minHeight="100vh" p={4}>
          <Header />
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
          <DarkModeSwitch />
        </Container>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
