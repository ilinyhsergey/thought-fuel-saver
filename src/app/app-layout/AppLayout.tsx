import * as React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Button, Group, UnstyledButton } from '@mantine/core';
import classes from './AppLayout.module.scss';
import { useState } from 'react';

export const AppLayout: React.FC = () => {
  const [opened, { toggle }] = useDisclosure();

  const [count, setCount] = useState(0);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            Header
            <Group ml="xl" gap={0} visibleFrom="sm">
              <UnstyledButton className={classes.control}>Home</UnstyledButton>
              <UnstyledButton className={classes.control}>Blog</UnstyledButton>
              <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
              <UnstyledButton className={classes.control}>Support</UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={classes.control}>Home</UnstyledButton>
        <UnstyledButton className={classes.control}>Blog</UnstyledButton>
        <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
        <UnstyledButton className={classes.control}>Support</UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main>
        Navbar is only visible on mobile, links that are rendered in the header on desktop are
        hidden on mobile in header and rendered in navbar instead.

        <h3>Header</h3>

        <Button
          fullWidth
          variant="filled"
          type="button"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </Button>
      </AppShell.Main>
    </AppShell>
  );
};