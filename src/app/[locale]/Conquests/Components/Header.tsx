import Image from "next/image";

import BackIcon from '@/Midias/arrow-left.svg'
import Menu from '@/Midias/menu-alt-3.svg'

function index() {
    return (
        <header className="w-full px-4 py-8 border-b border-zinc-200">
            <nav className="w-full flex flex-row justify-between items-center">
                <section className="flex flex-row gap-3">
                    <Image src={BackIcon} alt='Voltar' />
                    <p className="text-zinc-700 text-base font-bold font-['Nunito'] leading-normal">Minhas Conquistas</p>
                </section>

                <section>
                    <Image src={Menu} alt='Mobile Menu'/>
                </section>
            </nav>
        </header>
    );
}

export default index;