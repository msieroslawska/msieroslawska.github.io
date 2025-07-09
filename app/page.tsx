import {
  Anchor,
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  Center,
  Container,
  Text,
  Title,
} from "@mantine/core";
// import * as contentful from "contentful";

// function test() {
//   const client = contentful.createClient({
//     space: process.env.CONTENTFUL_SPACE_ID || "",
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
//   });

//   client
//     .getEntries({
//       content_type: "codeLog",
//     })
//     .then((response) => {
//       console.log(response.items);
//     });
// }

export default function Home() {
  return (
    <AppShell header={{ height: 60 }} footer={{ height: 60 }}>
      <AppShellHeader>
        <Container>
          <Title order={2}>Hi!</Title>
          <Text size="sm" color="dimmed">
            A modern template using Mantine UI, Next.js, and Bun.
          </Text>
        </Container>
      </AppShellHeader>
      <AppShellMain>
        <Container p="xl" mt={200}>
          <Text mt="md">
            <strong>
              <Anchor
                href="https://mantine.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mantine UI
              </Anchor>
            </strong>
            : A comprehensive and customizable UI component library.
          </Text>
          <Text>
            <strong>
              <Anchor
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </Anchor>
            </strong>
            : A popular React framework for server-side rendering and static
            site generation.
          </Text>
          <Text>
            <strong>
              <Anchor
                href="https://bun.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bun
              </Anchor>
            </strong>
            : A fast and efficient package manager, bundler, and test runner.
          </Text>
        </Container>
      </AppShellMain>
      <AppShellFooter>
        <Center h={60}>
          <Text>
            Page built using{" "}
            <Anchor href="https://contentful.com">Contentful</Anchor>,{" "}
            <Anchor href="https://mantine.dev">Mantine</Anchor> and{" "}
            <Anchor href="https://nextjs.org">Next.js</Anchor> &middot;{" "}
            <Anchor href="https://github.com/msieroslawska/">Source</Anchor>
          </Text>
        </Center>
      </AppShellFooter>
    </AppShell>
  );
}
