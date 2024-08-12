import FotoPerfil from '@/Midias/Rectangle 8.png'
import FotoMenu from '@/Midias/menu-alt-3.svg'
import Image from 'next/image';

function Header() {
    return (
        <header className='w-full px-4 py-8 border border-b'>
            <nav className='w-full flex flex-row justify-between items-center'>

                <section className='flex flex-row items-center w-full gap-2'>
                    <div>
                        <Image src={FotoPerfil} alt='Foto de perfil' className='border rounded-full border-bg-primary' />
                    </div>

                    <div className='flex flex-col'>
                        <h1 className="text-zinc-700 text-base font-bold font-['Nunito'] leading-normal">Lucas Naruto</h1>
                        <span className="text-zinc-400 text-xs font-normal font-['Nunito'] leading-none">45 EXP</span>
                    </div>

                </section>

                <section>
                    <Image src={FotoMenu} alt="Menu"/>
                </section>
            </nav>
        </header>
    );
}

export default Header;