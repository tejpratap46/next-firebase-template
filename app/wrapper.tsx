import { Container, MantineProvider } from "@mantine/core";
import theme from "./theme";
import { ReactNode } from "react";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Notifications />
      <Container className="h-screen" size={"xs"}>
        {children}
      </Container>
    </MantineProvider>
  );
}
