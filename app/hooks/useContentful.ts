"use client";

import { useEffect, useMemo, useState } from "react";

import { type CodelogEntry, CodelogEntrySchema } from "@/types/contentful";

export const useContentful = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<CodelogEntry[]>([]);
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
        const parsedData = CodelogEntrySchema.array().parse(rawData);
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

  const codelogs = useMemo(() => data, [data]);

  return {
    codelogs,
    error,
    isLoading,
  };
};
