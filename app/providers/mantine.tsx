import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import { theme } from './theme';

export const Mantine = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      {children}
    </MantineProvider>
  );
};
