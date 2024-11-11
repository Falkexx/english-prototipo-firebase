"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Dispatch, SetStateAction } from 'react';
import CheckTokenIsValid from "../services/CheckTokenIsValid";
import GenerateToken from "../services/GenerateToken";

type Props = {

  avancar: () => void;
  GetToken: Dispatch<SetStateAction<string>>;
  email: string
}


function TokenContainer({ avancar, GetToken, email }:Props) {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  // Referências para cada input
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];



  const otp = watch("otp", []); // Escuta mudanças no OTP, valor inicial como array vazio

  async function handleToken() {
    const otpString = otp?.join(""); // Converte o array em string sem vírgulas
    GetToken(otpString)
    const isTokenValid = await CheckTokenIsValid(otpString, email)

    if(isTokenValid.message == 'success'){
      avancar();
    }
  }

  async function HandleResendToken(email:string) {

    setCanResend(false)
    setTimer(120)
    await GenerateToken(email)
  }

  // Efeito para iniciar o temporizador quando o componente é montado
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000); // Decrementa a cada segundo
      return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
    } else {
      setCanResend(true); // Permite reenviar o código quando o timer chega a 0
    }
  }, [timer]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    // Define o valor do campo atual
    setValue(`otp[${index}]`, value);

    // Move para o próximo input, se houver
    if (value && inputRefs[index + 1]) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && inputRefs[index - 1]) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <section className="h-[calc(100vh-10vh)] flex flex-col gap-8">
      <article className="w-full">
        <h1 className="text-zinc-800 text-xl font-bold font-['Nunito'] leading-loose">
          Insira o Código OTP
        </h1>
        <p className="text-zinc-500 text-sm font-normal font-['Nunito'] leading-tight">
          Nós enviamos um código de recuperação no seu e-mail, preencha abaixo
          para alterar sua senha.
        </p>
      </article>

      <form
        className="h-3/4 flex flex-col justify-between"
        method="post"
        onSubmit={handleSubmit(handleToken)}
      >
        <section className="flex flex-col gap-2">
          <label className="labelDef" htmlFor="otp">
            Cole aqui o seu Token.
          </label>

          <div className="w-full flex flex-row justify-between gap-2">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <input
                  key={index}
                  {...register(`otp[${index}]`)} // Registra cada input como parte do campo "otp"
                  type="text"
                  maxLength={1}
                  className="h-[77px] w-16 text-center text-4xl font-bold bg-zinc-100 rounded-lg"
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={inputRefs[index]}
                  required
                />
              ))}
          </div>

          <div className="w-full mt-6 text-center flex flex-col gap-4">
            <article>
              {/* Mostra o tempo restante */}
              {!canResend ? (
                <p className="text-zinc-500 text-sm font-semibold font-['Nunito'] leading-tight">
                  Você pode solicitar um novo código em{" "}
                  <span className="text-[#f14968] text-base font-bold font-['Nunito']">
                    {timer}
                  </span>{" "}
                  segundos.
                </p>
              ) : (
                <p className="text-zinc-500 text-sm font-semibold font-['Nunito'] leading-tight">
                  Agora você pode solicitar um novo código.
                </p>
              )}
            </article>

            {/* Habilita ou desabilita o link de acordo com o timer */}
            <button

              disabled={!canResend}
              className={`${
                !canResend ? "pointer-events-none opacity-50" : ""
              } text-[#f14968] text-base font-bold font-['Nunito'] leading-normal`}
              onClick={()=>HandleResendToken(email)}
            >
              Reenviar o código
            </button>
          </div>
        </section>

        <button type="submit" className="Btn_Primary">
          continuar
        </button>
      </form>
    </section>
  );
}

export default TokenContainer;
