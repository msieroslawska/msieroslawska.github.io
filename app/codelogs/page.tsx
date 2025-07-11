"use client";
import { Text } from "@mantine/core";

import { useContentful } from "../hooks/useContentful";

export default function CodeLogs() {
  const { codeLogs, error, isLoading } = useContentful();

  return (
    <>
      <Text>
        {isLoading ? "Loading..." : JSON.stringify(codeLogs, null, 2)}
        {error && <Text c="red">Error: {error.message}</Text>}
      </Text>
    </>
  );
}
