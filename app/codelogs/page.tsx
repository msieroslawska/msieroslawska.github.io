"use client";
import { Text } from "@mantine/core";

import { useContentful } from "../hooks/useContentful";

export default function CodeLogs() {
  const { codelogs, error, isLoading } = useContentful();

  return (
    <>
      <Text>
        {isLoading
          ? "Loading..."
          : JSON.stringify(
              codelogs.map((codelog) => codelog.fields.title),
              null,
              2
            )}
        {error && <Text c="red">Error: {error.message}</Text>}
      </Text>
    </>
  );
}
