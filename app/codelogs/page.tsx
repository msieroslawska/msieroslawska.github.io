"use client";
import { Text } from "@mantine/core";
import { useEffect, useState } from "react";

import { type CodeLogEntry, CodeLogEntrySchema } from "@/types/contentful";

export default function CodeLogs() {
  const [contentfulData, setContentfulData] = useState<CodeLogEntry[]>([]);
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
        const codeLogs = CodeLogEntrySchema.array().parse(data);

        setContentfulData(codeLogs);
        console.log(codeLogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchContentfulData();
  }, []);

  return (
    <>
      <Text>
        {isLoading ? "Loading..." : JSON.stringify(contentfulData[0], null, 2)}
      </Text>
    </>
  );
}
