"use client";

import Image from "next/image";
import { useState } from "react";
import { parseCookies } from "nookies";
import { AuthContext } from "@/app/contexts/AuthContext";
import React, { useContext } from "react";
import { useQuery } from "react-query";

import LogoMobile from "@/Midias/LogoMobile.svg";
import CloseMenu from "@/Midias/menu-x.svg";
import HomeIcon from "@/Midias/Icons/home.svg";
import FireIcon from "@/Midias/Icons/fire.svg";
import ConfigIcon from "@/Midias/Icons/config.svg";
import CupIcon from "@/Midias/Icons/cup.svg";
import LogoutIcon from "@/Midias/Icons/logout.svg";
import FotoPerfil from "@/Midias/Rectangle 8.png";
import FotoMenu from "@/Midias/menu-alt-3.svg";
import FlagsSelector from "./FlagSelector";

// Função para buscar dados do usuário
const fetchUserData = async (token: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/student/current`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar dados do usuário");
  }

  return response.json();
};

function Header() {
  const { logout } = useContext(AuthContext);

  const [hamburgerMenu, setHamburguerMenu] = useState(false);

  // Recupera o token dos cookies
  const cookies = parseCookies();
  const token = cookies["nextauth.token"];

  const {
    data: userData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: () => fetchUserData(token!),
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
  });

  const toggleOverlay = () => setHamburguerMenu(!hamburgerMenu);
  
  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar</div>;

  if (token) {

    return (
      <header className="w-full px-4 py-8 border border-b">
        <nav className="w-full flex flex-row justify-between items-center">
          <section className="flex flex-row items-center w-full gap-2">
            <div>
              <Image
                src={FotoPerfil}
                alt="Foto de perfil"
                className="border rounded-full border-bg-primary"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-zinc-700 text-base font-bold font-['Nunito'] leading-normal">
                {userData?.name}
              </h1>
              <span className="text-zinc-400 text-xs font-normal font-['Nunito'] leading-none">
                {userData.exp >= 0 ? `${userData.exp} EXP` : `Indisponível`}
              </span>
            </div>
          </section>

          <section>
            <FlagsSelector/>
          </section>
        </nav>

        {hamburgerMenu && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col box-border px-6 py-8">
            <div className="flex justify-between">
              <Image src={LogoMobile} alt="Logo" />
              <Image src={CloseMenu} alt="MenuX" onClick={toggleOverlay} />
            </div>
            <div className="h-[1px] w-full bg-zinc-200 my-6"></div>
            <button className="Btn_Primary mb-12">Assinar Premium</button>

            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-base font-bold text-zinc-800">
                  {userData?.name}
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
                <Image src={FireIcon} alt="Fire" />
              </li>

              <li className="flex justify-between">
                <a href="" className="text-base text-zinc-800 font-bold">
                  Configurar Conta
                </a>
                <Image src={ConfigIcon} alt="Config" />
              </li>

              <li className="flex justify-between">
                <a href="" className="text-base text-zinc-800 font-bold">
                  Leaderboard
                </a>
                <Image src={CupIcon} alt="Cup" />
              </li>

              <div className="h-[1px] w-full bg-zinc-200"></div>

              <li className="flex justify-between" onClick={logout}>
                <a href="" className="text-base text-zinc-800 font-bold">
                  LogOut
                </a>
                <Image src={LogoutIcon} alt="Logout" />
              </li>
            </ul>
          </div>
        )}
      </header>
    );
  }else{

    return;
  }
}

export default Header;
