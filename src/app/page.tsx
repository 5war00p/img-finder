import { InitialView } from "@/components/initial-view";
import Navbar from "@/components/navbar";
import { ResultsView } from "@/components/results-view";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <InitialView /> */}
      <ResultsView />
    </>
  );
}
