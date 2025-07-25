import React from 'react';

import { Footer, Navigation } from '@components';
import { AppProviders } from '@providers';

import './globals.css';

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
          <div className="min-h-screen flex flex-col bg-base-200">
            <Navigation />
            <main className="flex-1 w-full flex flex-col items-center justify-center h-full">{children}</main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
