import Image from "next/image";
import LogoMobile from '@/Midias/LogoMobile.svg'
import FlagSelector from "@/app/[locale]/Home/Components/FlagSelector"
function Header() {
    return (

<>
  <header className="w-full h-20 flex items-center border-b-2 px-4 lg:max-w-7xl lg:mx-auto lg:justify-between lg:border-b-0 lg:px-0 ">
    <div className=" flex-1 flex justify-center lg:flex-0 lg:justify-normal lg:block">
      <Image src={LogoMobile} alt="Logo" />
    </div>

    <div className="ml-auto">
      <FlagSelector />
    </div>
  </header>
</>

    );
}

export default Header;