import Image from "next/image";
import Link from "next/link";

import HomeIcon from "@/Midias/Icons/homeBottomHeader.svg";
import HeartIcon from "@/Midias/Icons/heart.svg";
import CupIcon from "@/Midias/Icons/cup.svg";
import DollarIcon from "@/Midias/Icons/currency-dollar.svg";
import ThunderIcon from "@/Midias/Icons/lightning-bolt.svg";
import UserIcon from "@/Midias/Icons/user.svg";

function BottomHeader() {

  return (
    <header className="w-full h-16 bg-white border-t-2 border-zinc-200">
      <nav className="w-full flex flex-row justify-around items-center h-full">
        <Link href="/">
          <Image src={HomeIcon} alt="Home icon" className="w-12 h-9" />
        </Link>

        <Link href="/">
          <Image src={HeartIcon} alt="Heart icon" className="w-12 h-9" />
        </Link>

        <Link href="/">
          <Image src={CupIcon} alt="Cup icon" className="w-12 h-9" />
        </Link>

        <Link href="/">
          <Image src={DollarIcon} alt="Dollar icon" className="w-12 h-9" />
        </Link>

        <Link href="/">
          <Image src={ThunderIcon} alt="Raio icon" className="w-12 h-9" />
        </Link>

        <Link href="/">
          <Image src={UserIcon} alt="User icon" className="w-12 h-9" />
        </Link>
      </nav>
    </header>
  );
}

export default BottomHeader;
