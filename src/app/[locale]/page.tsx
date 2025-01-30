import Header from "@/Components/Header";
import Hero from '@/ComponentsPage/Hero'
import CTA_Buttons from "../../ComponentsPage/CTA_Buttons";
import {useTranslations} from 'next-intl';



export default function Home() {

  const t = useTranslations('HomePage');

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
