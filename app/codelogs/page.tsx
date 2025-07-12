"use client";
import { List, Text } from "@mantine/core";
import Link from 'next/link';

import { useContentful } from "../hooks/useContentful";

export default function CodeLogs() {
  const { codelogs, error, isLoading } = useContentful();

  const codeLogLinks = codelogs.map((cl) => (
    <List.Item key={cl.sys.id}>
    <Link
      href={`/codelogs/${cl.fields.title}`}
    >
      {cl.fields.title}
    </Link>
    </List.Item>
  ));

  return (
    <>
      <Text>
        {isLoading
          ? "Loading..."
          : (<List>
              {codeLogLinks}
            </List>
          )}
        {error && <Text c="red">Error: {error.message}</Text>}
      </Text>
    </>
  );
}
