import Image from "next/image";
import Logo from '@/Midias/Icons/Logo.svg'
import Menu from '@/Midias/menu-alt-3.svg'

function HeaderRanking() {
    return (
        <header className="w-full flex justify-between py-4 px-6 border-b border-zinc-200">

            <section className="flex flex-row gap-2">
                <Image src={Logo} alt='Logo'/>
                <h1 className="text-zinc-700 text-base font-bold font-['Nunito'] leading-normal">Leaerboard</h1>
            </section>

            <section>
                <Image src={Menu} alt="Menu"/>
            </section>

        </header>
    );
}

export default HeaderRanking;