"use client";

import { useEffect, useMemo, useState } from "react";

import { type CodeLogEntry, CodeLogEntrySchema } from "@/types/contentful";

export const useContentful = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<CodeLogEntry[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchContentfulData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/contentful");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const rawData = await response.json();
        const parsedData = CodeLogEntrySchema.array().parse(rawData);
        setData(parsedData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false);
      }
    };

    fetchContentfulData();
  }, []);

  const codeLogs = useMemo(() => data, [data]);

  return {
    codeLogs,
    error,
    isLoading,
  };
};
