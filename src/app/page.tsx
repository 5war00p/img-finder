"use client";
import { InitialView } from "@/components/initial-view";
import Navbar from "@/components/navbar";
import { ResultsView } from "@/components/results-view";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  return (
    <>
      <Navbar />
      {q ? <ResultsView /> : <InitialView />}
    </>
  );
}
