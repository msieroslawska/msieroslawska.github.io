import { AppProviders } from '@providers';
import React from 'react';
import './globals.css';

import { Anchor, Text, Navigation } from '@components';

export const metadata = {
  title: "Marta's personal page",
  description: 'Hello! This is my personal website!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body>
        <AppProviders>
          <div className="min-h-screen flex flex-col">
            <header className="w-full h-[150px] bg-gray-100">
              <Navigation />
            </header>
            <main className="flex-1 w-full">{children}</main>
            <footer className="w-full h-[150px] bg-gray-100">
              <Text>
                Page built using <Anchor href="https://contentful.com" label="Contentful" />,{' '}
                <Anchor href="https://nextjs.org" label="Next.js" /> &middot;{' '}
                <Anchor href="https://github.com/msieroslawska/" label="Source" />
              </Text>
            </footer>
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
