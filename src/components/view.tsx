"use client";
import { useSearchParams } from "next/navigation";
import { ResultsView } from "./results-view";
import { InitialView } from "./initial-view";
import Image from "next/image";

export default function View() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  return (
    <>
      <div className="fixed w-[100vw] h-[100vh] overflow-hidden z-[-1] top-0 left-0">
        <Image
          alt="travel"
          src={`/bgs/${Math.floor(Math.random() * 9)}.jpg`}
          fetchPriority="high"
          fill
        />
      </div>
      {q ? <ResultsView /> : <InitialView />}
    </>
  );
}
