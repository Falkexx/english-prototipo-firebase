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




function HeaderPerfil() {
    const [hamburgerMenu, setHamburguerMenu] = useState(false);

    const toggleOverlay = () => {
        setHamburguerMenu(!hamburgerMenu);
    };


    return (
        <header className='w-full px-6 py-8 border border-b'>
            <nav className='w-full flex flex-row justify-between items-center'>

                <section className='flex items-center w-full gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.70703 17.1068C9.5195 17.2943 9.26519 17.3996 9.00003 17.3996C8.73487 17.3996 8.48056 17.2943 8.29303 17.1068L2.29303 11.1068C2.10556 10.9193 2.00024 10.665 2.00024 10.3998C2.00024 10.1347 2.10556 9.88035 2.29303 9.69282L8.29303 3.69282C8.48163 3.51066 8.73423 3.40987 8.99643 3.41215C9.25863 3.41443 9.50944 3.51959 9.69485 3.705C9.88026 3.89041 9.98543 4.14122 9.9877 4.40342C9.98998 4.66562 9.88919 4.91822 9.70703 5.10682L5.41403 9.39982H17C17.2652 9.39982 17.5196 9.50518 17.7071 9.69271C17.8947 9.88025 18 10.1346 18 10.3998C18 10.665 17.8947 10.9194 17.7071 11.1069C17.5196 11.2945 17.2652 11.3998 17 11.3998H5.41403L9.70703 15.6928C9.8945 15.8803 9.99982 16.1347 9.99982 16.3998C9.99982 16.665 9.8945 16.9193 9.70703 17.1068Z" fill="#3F3F46" />
                    </svg>
                    <h1 className="text-zinc-700 text-base font-bold font-['Nunito'] leading-normal">Meu perfil</h1>

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
                            <a href="/Home" className='text-base text-zinc-800 font-bold'>Página Inicial</a>
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

export default HeaderPerfil;