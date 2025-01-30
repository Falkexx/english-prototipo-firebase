"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Eyes from "@/Midias/eye-off.png";
import OpenedEyes from "@/Midias/Icons/eye.svg";
import Lock from "@/Midias/lock-closed.png";

interface YourPsswrdProps {
  onPasswordChange: (password: string) => void;
  onConfirmPasswordChange: (confirmPassword: string) => void;
}

function YourPsswrd({ onPasswordChange, onConfirmPasswordChange }: YourPsswrdProps) {

  const t = useTranslations('SignUpStages')
  
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onPasswordChange(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onConfirmPasswordChange(e.target.value);
  };

  return (
    <section className="flex flex-col gap-14 mt-6">
      <h1 className="text-zinc-800 text-xl font-bold font-['Nunito'] leading-loose">
        {t('YourPsswrd.title')}
      </h1>

      <form className="flex flex-col">
        {/* Campo da Senha */}
        <label className="labelDef">{t('YourPsswrd.passwordLabel')}</label>
        <div className="relative">
          {/* Ícone do Cadeado (fixo) */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Image src={Lock} alt="Lock Icon" width={20} height={20} />
          </div>
          {/* Ícone do Olho (muda ao clicar) */}
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={() => setIsVisiblePassword(!isVisiblePassword)}
          >
            <Image src={isVisiblePassword ? OpenedEyes : Eyes} alt="Eye Icon" width={20} height={20} />
          </div>
          {/* Input da Senha */}
          <input
            type={isVisiblePassword ? "text" : "password"}
            className="inputDef px-10 w-full"
            onChange={handlePasswordChange}
          />
        </div>

        {/* Campo de Confirmação da Senha */}
        <label className="labelDef mt-14">{t('YourPsswrd.confirmPasswordLabel')}</label>
        <div className="relative">
          {/* Ícone do Cadeado (fixo) */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Image src={Lock} alt="Lock Icon" width={20} height={20} />
          </div>
          {/* Ícone do Olho (muda ao clicar) */}
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={() => setIsVisibleConfirmPassword(!isVisibleConfirmPassword)}
          >
            <Image src={isVisibleConfirmPassword ? OpenedEyes : Eyes} alt="Eye Icon" width={20} height={20} />
          </div>
          {/* Input de Confirmação da Senha */}
          <input
            type={isVisibleConfirmPassword ? "text" : "password"}
            className="inputDef px-10 w-full"
            onChange={handleConfirmPasswordChange}
          />
        </div>
      </form>
    </section>
  );
}

export default YourPsswrd;
