import Navbar from "@/components/navbar";
import Image from "next/image";
import View from "@/components/view";

export default function Home() {
  return (
    <>
      <div className="fixed w-[100vw] h-[100vh] overflow-hidden z-[-1] top-0 left-0">
        <Image
          alt="travel"
          src={`/bgs/${Math.floor(Math.random() * 8)}.jpg`}
          fetchPriority="high"
          fill
        />
      </div>
      <Navbar />
      <View />
    </>
  );
}
