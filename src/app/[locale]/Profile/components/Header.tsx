import Image from "next/image";

import Logo from '@/Midias/Icons/Logo.svg'
import Menu from '@/Midias/menu-alt-3.svg'

function Header() {
    return (
        <header className="w-full px-6 py-4 border-b border-zinc-200">

            <nav className="w-full flex flex-row justify-between items-center">

                <article className="flex flex-row gap-3">
                    <Image src={Logo} alt='Logo' />

                    <p className="text-zinc-700 text-base font-bold font-['Nunito'] leading-normal">Minha conta</p>
                </article>

                <article>
                    <Image src={Menu} alt='Logo' />
                </article>
            </nav>

        </header>
    );
}

export default Header;