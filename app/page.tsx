import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guids from "@/components/Guids";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Camp/>
      <Guids/>
      <Features/>
      <GetApp/>
    </div>
  );
}
