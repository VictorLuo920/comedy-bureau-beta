import { supabase } from "../utils/supabaseClient";
import { Auth, Typography, Button } from "@supabase/ui";
import { Text } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Main } from "../components/Main";

function Profile(props) {
  const { user } = Auth.useUser();
  if (user)
    return (
      <>
        <Text>Signed in: {user.email}</Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    );
  return props.children;
}

export default function AuthProfile() {
  return (
    <Container height="100vh" maxWidth="52rem" justifyContent="center" alignItems="center">
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Profile supabaseClient={supabase}>
          <Auth supabaseClient={supabase} />
        </Profile>
      </Auth.UserContextProvider>
    </Container>
  );
}
