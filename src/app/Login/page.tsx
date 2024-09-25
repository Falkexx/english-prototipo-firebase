"use client";

import AvanceBtn from "@/app/Signup/Components/AvanceBtn/index";
import HeaderCadastros from "@/app/Signup/Components/Header/index";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Mail from "@/Midias/mail.png";
import Image from "next/image";
import Eyes from "@/Midias/eye-off.png";
import Lock from "@/Midias/lock-closed.png";
import { setCookie } from "nookies";
import { useForm } from "react-hook-form";
import { AuthContext } from "@/app/contexts/AuthContext"; // Autenticação via contexto
import Link from "next/link";

// Definindo o tipo dos dados do formulário
type FormData = {
  email: string;
  password: string;
};

function Page() {
  const [progressBar, setProgressBar] = useState(0);
  const router = useRouter();

  // Usando o tipo FormData no useForm
  const { register, handleSubmit } = useForm<FormData>();
  const { signIn } = useContext(AuthContext); // Utilizando a função de login via contexto

  function BackToHome() {
    if (progressBar === 0) {
      router.push("/");
    }
  }

  async function handleSigin(data: FormData) {
    // Utilizando a função de login do contexto
    await signIn(data);
  }

  return (
    <>
      <main className="p-4 flex flex-col h-[calc(100vh-10vh)] justify-between gap-5">
        <section>
          <HeaderCadastros BackFunction={BackToHome} />
          <article className="flex flex-col gap-2 mb-10 mt-10">
            <span className="text-xl font-extrabold text-zinc-700">
              Bem-vindo(a) de volta!
            </span>
            <span className="text-sm font-medium text-zinc-500">
              Preencha seus dados cadastrados
            </span>
          </article>

          <form
            className="flex flex-col gap-2 h-full justify-between"
            method="post"
            onSubmit={handleSubmit(handleSigin)} // Não altera aqui
          >
            <section className="flex flex-col gap-2 ">
              <label className="labelDef" htmlFor="Email">
                Seu Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <Image src={Mail} alt="Mail Icon" width={20} height={20} />
                </div>
                <input
                  {...register("email")}
                  type="text"
                  name="email"
                  className="inputDef pl-7 w-full"
                  placeholder="Digite seu Email..."
                  required
                  autoComplete="current-email"
                />
              </div>

              <label className="labelDef mt-6" htmlFor="password">
                Sua Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <Image src={Lock} alt="Mail Icon" width={20} height={20} />
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <Image src={Eyes} alt="Eye Icon" width={20} height={20} />
                </div>
                <input
                  {...register("password")}
                  name="password"
                  type="password"
                  className="inputDef px-7 w-full"
                  placeholder="Digite sua Senha..."
                  required
                />
              </div>

              <div className="w-full mt-6">
                <Link
                  href={"/Login/Recoverpassword"}
                  className="text-[#f14968] text-base font-medium font-['Nunito'] leading-normal"
                >
                  Esqueci a minha senha
                </Link>
              </div>
            </section>
            <div className="w-full mt-6">
              <input type="submit" value="Entrar" className="Btn_Primary" />
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Page;
