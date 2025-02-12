"use client";


import Image from "next/image";
import Logo from '@/Midias/LogoMobile.svg'
import FlagSelector from "@/app/[locale]/Home/Components/FlagSelector"
import userPhoto from "@/Midias/FotoUsuarioEditar.png"
import GetUserDatas from "@/services/GetUserDatas";
import { parseCookies } from "nookies";
import { useQuery } from "react-query";


function Header() {
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


  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar</div>;

  const userName = userData?.name ?? "Usuário";
  const userEmail = userData?.email ?? "Sem E-mail"
  const userExp = userData?.exp ?? 0;
  const userAvatar = userData?.avatar_url ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf49fton7yztt_1Xmzro_oc-xSEV9oa-JzXg&s";

  return <header className="">

    <section className="h-fit w-full flex flex-row justify-between items-center py-6 border-b border-zinc-200">
        <Image src={Logo} alt="Logo"/>

        <FlagSelector/>

    </section>

    <section className="h-fit w-full flex flex-row justify-between items-center py-6 border-b border-zinc-200">

      

      <div>
        <h1 className="text-zinc-700 text-base font-semibold">{userName}</h1>
        <span className="text-zinc-400 text-sm leading-tight">{userEmail}</span>
      </div>

      <Image src={userPhoto} alt="user profile photo" className="w-10 h-10"/>

    </section>

  </header>;
}

export default Header;
