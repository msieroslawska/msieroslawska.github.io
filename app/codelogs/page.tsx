"use client";
import { Text } from "@mantine/core";
import { useEffect, useState } from "react";

export default function CodeLogs() {
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
    <>
      <Text>
        {isLoading ? "Loading..." : JSON.stringify(contentfulData[0], null, 2)}
      </Text>
    </>
  );
}
