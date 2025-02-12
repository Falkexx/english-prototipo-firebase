import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

import HomeIcon from "@/Midias/Icons/homeBottomHeader.svg";
import HeartIcon from "@/Midias/Icons/heart.svg";
import CupIcon from "@/Midias/Icons/cup.svg";
import DollarIcon from "@/Midias/Icons/currency-dollar.svg";
import ThunderIcon from "@/Midias/Icons/lightning-bolt.svg";
import UserIcon from "@/Midias/Icons/user.svg";

import HomeIconActived from "@/Midias/Icons/HomeBottomHeaderActived.svg";
import HeartIconActived from "@/Midias/Icons/heartActive.svg";
import CupIconActived from "@/Midias/Icons/cupActived.svg";
import DollarIconActived from "@/Midias/Icons/dollarActived.svg";
import ThunderIconActived from "@/Midias/Icons/lightningBoltActived.svg";
import UserIconActived from "@/Midias/Icons/userActived.svg";

interface NavigationProps {
  ActualPath: string;
}

function Navigation({ ActualPath }: NavigationProps) {
  const t = useTranslations("sidebar")
  const data = [
    { title: t("initialPage"), icon: HomeIcon, iconActive: HomeIconActived, href: "/Home", path: "Home" },
    //{ title: t("myConquests"), icon: HeartIcon, iconActive: HeartIconActived, href: "/Premium", path: "Premium" },
    { title: t("leaderBoard"), icon: CupIcon, iconActive: CupIconActived, href: "/RankingPage", path: "RankingPage" },
    { title: t("payments"), icon: DollarIcon, iconActive: DollarIconActived, href: "/PaymentPage", path: "Plans" },
    { title: t("recheck"), icon: ThunderIcon, iconActive: ThunderIconActived, href: "/Recheck", path: "Exams" },
    { title: t("myProfile"), icon: UserIcon, iconActive: UserIconActived, href: "/Profile", path: "Profile" },
  ];

  return (
    <nav className="flex flex-col gap-4 mt-6 pb-10 border-b border-zinc-200">
      {data.map((item) => {
        const isActive = ActualPath === item.path;

        return (
          <Link 
            key={item.path} 
            href={item.href} 
            className={`flex flex-row justify-between items-center h-14 px-4 rounded-2xl transition-all ${
              isActive ? "bg-[#ffeeef] border border-[#f14968]" : "border border-transparent"
            }`}
          >
            <h1 className={`text-base font-bold font-['Nunito'] leading-normal ${
              isActive ? "text-[#f14968]" : "text-zinc-700"
            }`}>
              {item.title}
            </h1>
            <Image 
              src={isActive ? item.iconActive : item.icon} 
              alt={item.title} 
              className="h-6 w-6"
            />
          </Link>
        );
      })}
    </nav>
  );
}

export default Navigation;
