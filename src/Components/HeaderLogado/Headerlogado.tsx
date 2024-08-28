'use client'
import FotoPerfil from '@/Midias/Rectangle 8.png'
import FotoMenu from '@/Midias/menu-alt-3.svg'
import Image from 'next/image';
import { useState } from 'react';
import LogoMobile from '@/Midias/LogoMobile.svg'
import CloseMenu from '@/Midias/menu-x.svg'
import HomeIcon from '@/Midias/Icons/home.svg'
import FireIcon from '@/Midias/Icons/fire.svg'
import ConfigIcon from '@/Midias/Icons/config.svg'
import CupIcon from '@/Midias/Icons/cup.svg'
import LogoutIcon from '@/Midias/Icons/logout.svg'




function HeaderLogado() {
    const [hamburgerMenu, setHamburguerMenu] = useState(false);

    const toggleOverlay = () => {
        setHamburguerMenu(!hamburgerMenu);
    };


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
                    <Image src={FotoMenu} alt="Menu" onClick={toggleOverlay} />
                </section>
            </nav>

            {hamburgerMenu && (
                <div className='fixed inset-0 bg-white z-50 flex flex-col box-border px-6 py-8'>
                    <div className='flex justify-between'>
                        <Image src={LogoMobile} alt="Logo" />
                        <Image src={CloseMenu} alt="MenuX" onClick={toggleOverlay} />
                    </div>
                    <div className='h-[1px] w-full bg-zinc-200 my-6'></div>
                    <button className='Btn_Primary mb-12'>Assinar Premium</button>
                
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-base font-bold text-zinc-800'>Lucas Naruto</span>
                        <span className='text-sm text-zinc-400'>lucas_naruto@gmail.com</span>
                    </div>
                    <Image src={FotoPerfil} alt="Foto Perfil" className='rounded-full' />
                </div>
                <div className='h-[1px] w-full bg-zinc-200 my-6'></div>

                <ul className='flex flex-col gap-8'>
                    <li className='flex justify-between'>
                        <a href="/LoggedHome" className='text-base text-zinc-800 font-bold'>Página Inicial</a>
                        <Image src={HomeIcon} alt="Home" />
                    </li>

                    <li className='flex justify-between'>
                        <a href="" className='text-base text-zinc-800 font-bold'>Minhas Conquistas</a>
                        <Image src={FireIcon} alt="Fire" />
                    </li>

                    <li className='flex justify-between'>
                        <a href="" className='text-base text-zinc-800 font-bold'>Configurar Conta</a>
                        <Image src={ConfigIcon} alt="Config" />
                    </li>

                    <li className='flex justify-between'>
                        <a href="" className='text-base text-zinc-800 font-bold'>Leaderboard</a>
                        <Image src={CupIcon} alt="Cup" />
                    </li>

                    <div className='h-[1px] w-full bg-zinc-200'></div>

                    <li className='flex justify-between'>
                        <a href="" className='text-base text-zinc-800 font-bold'>LogOut</a>
                        <Image src={LogoutIcon} alt="Logout" />
                    </li>
                </ul>

                </div>
            )}

        </header>
    );
}

export default HeaderLogado;