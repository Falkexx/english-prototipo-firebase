"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import FotoPerfilEditar from "@/Midias/FotoUsuarioEditar.png";
import { optionsPaises } from "@/constants/constants";
import BottomHeader from "../Home/Components/BottomHeader";
import ChangeDatas from "./services/ChangeDatas";
import { AuthContext } from "@/contexts/AuthContext";
import { DataProps } from "./services/ChangeDatas";
import formatPhoneNumber from "./services/formatPhoneNumber";
import InputMask from "react-input-mask";
import SuccessFulModal from "./components/SuccessFulModal";
import { useQuery } from "react-query";
import GetUserDatas from "@/services/GetUserDatas";

const Page = () => {
  const { token } = useContext(AuthContext);
  const [imgUrl, setImgUrl] = useState(
    "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
  );
  const [isChangeDone, setIsChangeDone] = useState(false);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formObject: { [key: string]: any } = Object.fromEntries(
      formData.entries()
    );

    const Data: DataProps = {
      name: formObject.name,
      date_of_birth: formObject.dateOfBirth,
      number_phone: formObject.cellphone, // Aqui usamos `number_phone` em vez de `cellphone`
      country: formObject.country,
      avatar_url: "https://avatars.githubusercontent.com/u/89611675?v=4",
    };

    if (!token) {
      console.error("Token is missing");
      return;
    }

    try {
      const response = await ChangeDatas(Data, token);

      if (response.avatar_url) {
        setImgUrl(response.avatar_url);
        setIsChangeDone(true);
      }
    } catch (error) {
      console.error("Failed to update data:", error);
    }
  };

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={userAvatar}
        alt="Foto de perfil"
        className="mt-[24.2px] w-28 h-28 rounded-full"
      />
      <form className="mt-[40px] flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="name" className="labelDef">
          Nome
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="Insira seu nome"
          className="inputDef"
        />

        <label htmlFor="cellphone" className="labelDef mt-[32px]">
          Número de telefone
        </label>
        <InputMask
          mask="+99 (99) 999999999"
          name="cellphone"
          required
          placeholder="+99 (99) 999999999"
          className="inputDef"
        />

        <label htmlFor="email" className="labelDef mt-[32px]">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="Insira seu e-mail"
          className="inputDef"
        />

        <label htmlFor="dateOfBirth" className="labelDef mt-[32px]">
          Data de Nascimento
        </label>
        <input
          type="date"
          name="dateOfBirth"
          required
          placeholder="Data de nascimento"
          className="inputDef"
        />

        <label htmlFor="country" className="labelDef mt-[32px]">
          País
        </label>
        <select
          name="country"
          id="country"
          required
          className="inputDef"
          defaultValue={"BR"}
        >
          {optionsPaises.map((pais) => (
            <option key={pais.value} value={pais.value}>
              {pais.label}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="mt-[47px] rounded-[100px] bg-[#F14968]
        text-white py-[18px] px-[16px] shadow-buttonSubmit text-[16px] font-extrabold leading-[140%]
        text-center tracking-[0.2px]"
        >
          Salvar
        </button>
      </form>

      <BottomHeader ActualPath="Profile" />

      {isChangeDone ? <SuccessFulModal /> : ""}
    </div>
  );
};

export default Page;
