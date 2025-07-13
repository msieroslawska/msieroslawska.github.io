import {
  ColorSchemeScript,
  mantineHtmlProps,
  Anchor,
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  Center,
  Text,
} from '@mantine/core';
import { AppProviders } from '@providers/index';
import React from 'react';

import { Navigation } from '@components/navigation';

export const metadata = {
  title: "Marta's personal page",
  description: 'Hello! This is my personal website!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body>
        <AppProviders>
          <AppShell header={{ height: 60 }} footer={{ height: 60 }}>
            <AppShellHeader>
              <Navigation />
            </AppShellHeader>
            <AppShellMain>{children}</AppShellMain>
            <AppShellFooter>
              <Center h={60}>
                <Text>
                  Page built using <Anchor href="https://contentful.com">Contentful</Anchor>,{' '}
                  <Anchor href="https://mantine.dev">Mantine</Anchor> and{' '}
                  <Anchor href="https://nextjs.org">Next.js</Anchor> &middot;{' '}
                  <Anchor href="https://github.com/msieroslawska/">Source</Anchor>
                </Text>
              </Center>
            </AppShellFooter>
          </AppShell>
        </AppProviders>
      </body>
    </html>
  );
}
