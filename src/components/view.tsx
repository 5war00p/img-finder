"use client";
import { useSearchParams } from "next/navigation";
import { ResultsView } from "./results-view";
import { InitialView } from "./initial-view";

export default function View() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  if (q) return <ResultsView />;
  return <InitialView />;
}
