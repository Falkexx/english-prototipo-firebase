import { useState } from "react";
import Image from "next/image";
import Eyes from "@/Midias/eye-off.png";
import Lock from "@/Midias/lock-closed.png";

interface YourPsswrdProps {
  onPasswordChange: (password: string) => void;
}

type passwordErrorMessage = {
  emptyPassword: string;
  invalidPassword: string;
  isNotMatching: string;
};

const errorMessages: passwordErrorMessage = {
  emptyPassword: "Preencha a senha por favor!",
  invalidPassword:
    "A senha deve conter 6 caracteres, uma letra maiúscula, um caractere especial (@, #, $, etc.), um número",
  isNotMatching: "A confirmação de senha não confere!",
};

function YourPsswrd({ onPasswordChange }: YourPsswrdProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);

  const [isErrorPassword, setIsErrorPassword] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    onPasswordChange(e.target.value);
    setIsErrorPassword("");
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  const handleShowConfirmPassword = () => {
    setIsVisibleConfirmPassword(!isVisibleConfirmPassword);
  };

  const validatePassword = () => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[\W_])(?=.*\d).{6,}$/;
    if (password.length <= 0) {
      setIsErrorPassword("emptyPassword");
    } else if (!passwordPattern.test(password)) {
      setIsErrorPassword("invalidPassword");
    } else if (password !== confirmPassword || confirmPassword.length === 0) {
      setIsErrorPassword("isNotMatching");
    } else {
      setIsErrorPassword("");
    }
  };

  return (
    <section className="flex flex-col gap-14 mt-6">
      <h1 className="text-zinc-800 text-xl font-bold font-['Nunito'] leading-loose">
        Última etapa! Define uma senha de acesso para sua conta.
      </h1>

      {/* Botão só de teste para acionar a funçao que valida a senha */}
      <div onClick={validatePassword}>
        <button>teste de funcao validate</button>
      </div>

      <form className="flex flex-col">
        <label className="labelDef">Sua Senha</label>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Image src={Lock} alt="Lock Icon" width={20} height={20} />
          </div>
          <div
            className="absolute inset-y-0 right-0 flex items-center"
            onClick={handleShowPassword}>
            <Image src={Eyes} alt="Eye Icon" width={20} height={20} />
          </div>
          <input
            type={isVisiblePassword ? "text" : "password"}
            className="inputDef px-7 w-full"
            value={password}
            onChange={handlePasswordChange}
          />

          {isErrorPassword === "emptyPassword" ? (
            <p className="absolute text-[#F14968] ">
              {errorMessages.emptyPassword}
            </p>
          ) : null}
          {isErrorPassword === "invalidPassword" ? (
            <p className="text-[#F14968] absolute">
              {errorMessages.invalidPassword}
            </p>
          ) : null}
          {isErrorPassword === "isNotMatching" ? (
            <p className="text-[#F14968] absolute">
              {errorMessages.isNotMatching}
            </p>
          ) : null}
        </div>

        <label className="labelDef mt-14">Confirme sua Senha</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Image src={Lock} alt="Lock Icon" width={20} height={20} />
          </div>
          <div
            className="absolute inset-y-0 right-0 flex items-center"
            onClick={handleShowConfirmPassword}>
            <Image src={Eyes} alt="Eye Icon" width={20} height={20} />
          </div>
          <input
            type={isVisibleConfirmPassword ? "text" : "password"}
            className="inputDef px-7 w-full"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {isErrorPassword === "isNotMatching" ? (
            <p className="text-[#F14968] absolute">
              {errorMessages.isNotMatching}
            </p>
          ) : null}
        </div>
      </form>
    </section>
  );
}

export default YourPsswrd;
