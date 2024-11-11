"use client";

import { useState } from "react";
import Image from "next/image";
import Eyes from "@/Midias/eye-off.png";
import OpenedEyes from "@/Midias/Icons/eye.svg";
import Lock from "@/Midias/lock-closed.png";

interface YourPsswrdProps {
  onPasswordChange: (password: string) => void;
  onConfirmPasswordChange: (confirmPassword: string) => void;
}

function YourPsswrd({
  onPasswordChange,
  onConfirmPasswordChange,
}: YourPsswrdProps) {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onPasswordChange(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onConfirmPasswordChange(e.target.value);
  };

  const handleShowPassword = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  const handleShowConfirmPassword = () => {
    setIsVisibleConfirmPassword(!isVisibleConfirmPassword);
  };

  return (
    <section className="flex flex-col gap-14 mt-6">
      <h1 className="text-zinc-800 text-xl font-bold font-['Nunito'] leading-loose">
        Última etapa! Defina uma senha de acesso para sua conta.
      </h1>

      <form className="flex flex-col">
        <label className="labelDef">Sua Senha</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center">
            {isVisiblePassword ? (
              <Image src={Lock} alt="Lock Icon" width={20} height={20} />
            ) : (
              <Image src={OpenedEyes} alt="Lock Icon" width={20} height={20} />
            )}
          </div>
          <div
            className="absolute inset-y-0 right-0 flex items-center"
            onClick={handleShowPassword}
          >
            <Image src={Eyes} alt="Eye Icon" width={20} height={20} />
          </div>
          <input
            type={isVisiblePassword ? "text" : "password"}
            className="inputDef px-7 w-full"
            onChange={handlePasswordChange}
          />
        </div>

        <label className="labelDef mt-14">Confirme sua Senha</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Image src={Lock} alt="Lock Icon" width={20} height={20} />
          </div>
          <div
            className="absolute inset-y-0 right-0 flex items-center"
            onClick={handleShowConfirmPassword}
          >
            {isVisibleConfirmPassword ? (
              <Image src={Eyes} alt="Eye Icon" width={20} height={20} />
            ) : (
              <Image src={OpenedEyes} alt="Eye Icon" width={20} height={20} />
            )}
          </div>
          <input
            type={isVisibleConfirmPassword ? "text" : "password"}
            className="inputDef px-7 w-full"
            onChange={handleConfirmPasswordChange}
          />
        </div>
      </form>
    </section>
  );
}

export default YourPsswrd;
