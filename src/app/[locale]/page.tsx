import Header from "@/Components/Header";
import Hero from "@/ComponentsPage/Hero";
import CTA_Buttons from "../../ComponentsPage/CTA_Buttons";
import { useTranslations } from "next-intl";
import HeroDesk from "@/ComponentsPage/Hero/HeroDesk";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <Header />

      <main className="w-full flex flex-col px-4 justify-around h-[calc(100vh-80px)] lg:px-0 ">
        <div className="lg:hidden">
          <Hero />
        </div>

        <div className="hidden lg:block">
          <HeroDesk />
        </div>

        <div className="lg:hidden">
          <CTA_Buttons />
        </div>
      </main>
    </>
  );
}
