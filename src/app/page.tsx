import Header from "@/Components/Header";
import Image from "next/image";
import Hero from '@/app/HomeComponents/Hero/index'
import CTA_Buttons from "./HomeComponents/CTA_Buttons";

export default function Home() {
  return (

    <>
      <Header />

      <main className="w-full flex flex-col p-9 justify-around h-[calc(100vh-80px)]">
        <Hero/>
        <CTA_Buttons/>
      </main>
    </>
  );
}
