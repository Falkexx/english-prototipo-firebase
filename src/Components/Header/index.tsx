import Image from "next/image";
import LogoMobile from '@/Midias/LogoMobile.svg'

function Header() {
    return (

        <>
            <header className="w-full h-20 flex flex-col justify-center items-center border border-b-2 ">

                <nav>

                    <Image src={LogoMobile} alt="Logo" />

                </nav>

            </header>

        </>
    );
}

export default Header;