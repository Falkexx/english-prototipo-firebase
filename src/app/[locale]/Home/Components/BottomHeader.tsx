'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Importação dos ícones
import HomeIcon from "@/Midias/Icons/homeBottomHeader.svg";
import HeartIcon from "@/Midias/Icons/heart.svg";
import CupIcon from "@/Midias/Icons/cup.svg";
import DollarIcon from "@/Midias/Icons/currency-dollar.svg";
import ThunderIcon from "@/Midias/Icons/lightning-bolt.svg";
import UserIcon from "@/Midias/Icons/user.svg";

import CupIconActived from "@/Midias/Icons/cupActived.svg";
import UserIconActived from "@/Midias/Icons/userActived.svg";
import HomeIconActived from "@/Midias/Icons/HomeBottomHeaderActived.svg";
import HeartIconActived from "@/Midias/Icons/heartActive.svg";
import ThunderIconActived from "@/Midias/Icons/lightningBoltActived.svg";
import DollarIconActived from "@/Midias/Icons/dollarActived.svg";

interface BottomHeaderProps {
  ActualPath: string;
}

function BottomHeader({ ActualPath }: BottomHeaderProps) {
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('nextauth.token='));
    if (!token) {
      // Redireciona para a página de login se o token não estiver presente
      router.push('/');
    }
  }, [router]);

  return (
    <header className="w-full h-16 bg-white border-t-2 border-zinc-200 fixed bottom-0">
      <nav className="w-full flex flex-row justify-around items-center h-full">
        {ActualPath === "Home" ? (
          <Link href="/Home" className="w-10 p-1 bg-[#ffeeef] rounded-xl border border-[#f14968]">
            <Image src={HomeIconActived} alt="Home icon" className="w-12 h-9" />
          </Link>
        ) : (
          <Link href="/Home">
            <Image src={HomeIcon} alt="Home icon" className="w-12 h-9" />
          </Link>
        )}

        {ActualPath === "Premium" ? (
          <Link href="/Premium" className="w-10 p-1 bg-[#ffeeef] rounded-xl border border-[#f14968]">
            <Image src={HeartIconActived} alt="Heart icon" className="w-12 h-9" />
          </Link>
        ) : (
          <Link href="/Premium">
            <Image src={HeartIcon} alt="Heart icon" className="w-12 h-9" />
          </Link>
        )}

        {ActualPath === "RankingPage" ? (
          <Link href="/RankingPage" className="w-10 p-1 bg-[#ffeeef] rounded-xl border border-[#f14968]">
            <Image src={CupIconActived} alt="Cup icon" className="w-12 h-9" />
          </Link>
        ) : (
          <Link href="/RankingPage">
            <Image src={CupIcon} alt="Cup icon" className="w-12 h-9" />
          </Link>
        )}

        {ActualPath === "Plans" ? (
          <Link href="/" className="w-10 p-1 bg-[#ffeeef] rounded-xl border border-[#f14968]">
            <Image src={DollarIconActived} alt="Dollar icon" className="w-12 h-9" />
          </Link>
        ) : (
          <Link href="/">
            <Image src={DollarIcon} alt="Dollar icon" className="w-12 h-9" />
          </Link>
        )}

        {ActualPath === "Exams" ? (
          <Link href="/Home" className="w-10 p-1 bg-[#ffeeef] rounded-xl border border-[#f14968]">
            <Image src={ThunderIconActived} alt="Raio icon" className="w-12 h-9" />
          </Link>
        ) : (
          <Link href="/Recheck">
            <Image src={ThunderIcon} alt="Raio icon" className="w-12 h-9" />
          </Link>
        )}

        {ActualPath === "Profile" ? (
          <Link href="/Profile" className="w-10 p-1 bg-[#ffeeef] rounded-xl border border-[#f14968]">
            <Image src={UserIconActived} alt="User icon" className="w-12 h-9" />
          </Link>
        ) : (
          <Link href="/Profile">
            <Image src={UserIcon} alt="User icon" className="w-12 h-9" />
          </Link>
        )}
      </nav>
    </header>
  );
}

export default BottomHeader;
