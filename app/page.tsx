"use client";
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
import { useEffect, useState } from "react";

export default function Home() {
  const [contentfulData, setContentfulData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchContentfulData() {
      setIsLoading(true);
      try {
        const response = await fetch("/contentful");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setContentfulData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchContentfulData();
  }, []);

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
            {isLoading ? "Loading..." : JSON.stringify(contentfulData, null, 2)}
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
