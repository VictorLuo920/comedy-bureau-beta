import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import theme from "../styles/theme";
import '../styles/styles.css';
import '../styles/DatePicker.css';

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
