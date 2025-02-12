"use client"

import Image from "next/image";
import logoutIcon from "@/Midias/logout.svg"
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { useTranslations } from "next-intl";

function LogOut() {

  const {logout} = useContext(AuthContext)
  const t = useTranslations("sidebar")

  function handleLogout(){
    logout()
  }


  return ( 
    <button className="w-full px-4 h-14 flex flex-row justify-between items-center my-6" onClick={()=>{handleLogout()}}>

      <span className="text-zinc-700 text-base font-bold">{t('logOut')}</span>

      <Image src={logoutIcon} alt="LogOut"/>

    </button>
   );
}

export default LogOut;