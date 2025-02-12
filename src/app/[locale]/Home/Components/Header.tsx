"use client";

import Image from "next/image";
import { useState, useContext } from "react";
import { parseCookies } from "nookies";
import { AuthContext } from "@/contexts/AuthContext";
import { useQuery } from "react-query";
import GetUserDatas from "@/services/GetUserDatas";

import LogoMobile from "@/Midias/LogoMobile.svg";
import CloseMenu from "@/Midias/menu-x.svg";
import HomeIcon from "@/Midias/Icons/home.svg";
import FireIcon from "@/Midias/Icons/fire.svg";
import ConfigIcon from "@/Midias/Icons/config.svg";
import CupIcon from "@/Midias/Icons/cup.svg";
import LogoutIcon from "@/Midias/Icons/logout.svg";
import FotoPerfil from "@/Midias/Rectangle 8.png";
import FlagsSelector from "./FlagSelector";

function Header() {
  const { logout } = useContext(AuthContext);
  const [hamburgerMenu, setHamburguerMenu] = useState(false);

  // Recupera o token dos cookies
  const cookies = parseCookies();
  const token = cookies["nextauth.token"];

  // Utiliza o serviço GetUserDatas dentro do react-query
  const {
    data: userData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: () => GetUserDatas(token!),
    enabled: !!token,
    staleTime: 1000 * 60 * 5, // Cache por 5 minutos
    refetchOnWindowFocus: true,
  });

  const toggleOverlay = () => setHamburguerMenu(!hamburgerMenu);

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar</div>;

  const userName = userData?.name ?? "Usuário";
  const userExp = userData?.exp ?? 0;
  const userAvatar = userData?.avatar_url ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf49fton7yztt_1Xmzro_oc-xSEV9oa-JzXg&s";

  return (
    <header className="w-full px-4 py-8 border border-b lg:hidden">
      <nav className="w-full flex flex-row justify-between items-center">
        <section className="flex flex-row items-center w-full gap-2">
          <div className="border rounded-full border-bg-primary w-14 h-14 overflow-hidden">
            <img
              src={userAvatar}
              alt="Foto de perfil"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-zinc-700 text-base font-bold font-['Nunito'] leading-normal">
              {userName}
            </h1>
            <span className="text-zinc-400 text-xs font-normal font-['Nunito'] leading-none">
              {userExp >= 0 ? `${userExp} EXP` : `Indisponível`}
            </span>
          </div>
        </section>

        <section>
          <FlagsSelector />
        </section>
      </nav>

      {hamburgerMenu && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col box-border px-6 py-8">
          <div className="flex justify-between">
            <Image src={LogoMobile} alt="Logo" />
            <Image src={CloseMenu} alt="Fechar Menu" onClick={toggleOverlay} />
          </div>
          <div className="h-[1px] w-full bg-zinc-200 my-6"></div>
          <button className="Btn_Primary mb-12">Assinar Premium</button>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-base font-bold text-zinc-800">
                {userName}
              </span>
              <span className="text-sm text-zinc-400">{userData?.email}</span>
            </div>
            <Image
              src={FotoPerfil}
              alt="Foto Perfil"
              className="rounded-full"
            />
          </div>
          <div className="h-[1px] w-full bg-zinc-200 my-6"></div>

          <ul className="flex flex-col gap-8">
            <li className="flex justify-between">
              <a href="/Home" className="text-base text-zinc-800 font-bold">
                Página Inicial
              </a>
              <Image src={HomeIcon} alt="Home" />
            </li>
            <li className="flex justify-between">
              <a href="" className="text-base text-zinc-800 font-bold">
                Minhas Conquistas
              </a>
              <Image src={FireIcon} alt="Conquistas" />
            </li>
            <li className="flex justify-between">
              <a href="" className="text-base text-zinc-800 font-bold">
                Configurar Conta
              </a>
              <Image src={ConfigIcon} alt="Configurações" />
            </li>
            <li className="flex justify-between">
              <a href="" className="text-base text-zinc-800 font-bold">
                Leaderboard
              </a>
              <Image src={CupIcon} alt="Classificação" />
            </li>
            <div className="h-[1px] w-full bg-zinc-200"></div>
            <li className="flex justify-between" onClick={logout}>
              <a href="" className="text-base text-zinc-800 font-bold">
                LogOut
              </a>
              <Image src={LogoutIcon} alt="Sair" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
