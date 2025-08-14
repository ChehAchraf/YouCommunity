import Image from "next/image";
import Hero from "./_components/_home/Hero";
import WhyComminuty from "./_components/_home/WhyComminuty";
import CommintyMembers from "./_components/_home/CommintyMembers";
import WhatWePromise from "./_components/_home/WhatWePromise";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyComminuty />
      <CommintyMembers />
      <WhatWePromise />
    </>
  );
}
