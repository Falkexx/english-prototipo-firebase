'use client'

import { Userdatas } from "@/app/Types/Types";
import { AuthContext } from "@/contexts/AuthContext";
import { useQuery } from "react-query";
import React, { useContext, useState } from "react";
import GetUserDatas from "@/services/GetUserDatas";

import PerfilImg from '../../../Midias/FotoUsuarioEditar.png'

import Image from "next/image";

function UserDatas() {
    const { token } = useContext(AuthContext);

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
    
      const userAvatar = userData?.avatar_url ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf49fton7yztt_1Xmzro_oc-xSEV9oa-JzXg&s";

      const userName = userData?.name ?? "";

      const userMemberSinceAt = userData?.created_at ?? "";

    

    const User: Userdatas = {

        data: [{ imgUrl: 'https://i.ibb.co/vmXkZ5W/img2ca.png', userName: 'Lucas Naruto', memberSince: 'Membro desde 20 de Julho de 2024' }]
    }

    if (isLoading) return <div>Carregando...</div>;


    return (

        <section className="w-full mt-8 ">

            {User.data.map((e) => {

                return (

                    <section className="w-full flex flex-col text-center justify-center items-center gap-4">
                        <img className="w-24 h-24 rounded-[110.40px]" src={userAvatar}  alt='perfil Img' />

                        <article className="flex flex-col gap-4">
                            <h1 className="text-zinc-800 text-2xl font-bold font-['Nunito'] leading-9">{userName}</h1>
                            <p className="text-zinc-500 text-sm font-medium font-['Nunito'] leading-tight">Membro desde: {userMemberSinceAt}</p>
                        </article>
                    </section>
                )
            })}
        </section>
    );
}

export default UserDatas;