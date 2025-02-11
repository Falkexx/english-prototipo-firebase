"use client";

import HeaderCadastros from "@/app/[locale]/Signup/Components/Header/index";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Mail from "@/Midias/mail.png";
import Image from "next/image";
import Eyes from "@/Midias/eye-off.png";
import OpenedEye from "@/Midias/Icons/eye.svg";
import Lock from "@/Midias/lock-closed.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "@/contexts/AuthContext";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LoginLoading from "@/Components/UI/LoginLoading";

type FormData = {
  email: string;
  password: string;
};

function Page() {
  const [progressBar, setProgressBar] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [openEyes, setOpenEyes] = useState(false); // Estado para alternar visibilidade da senha
  const [sigInError, setSigInError] = useState("")
  

  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();
  const { signIn } = useContext(AuthContext);

  function BackToHome() {
    if (progressBar === 0) {
      router.push("/");
    }
  }

  async function handleSigin(data: FormData) {
    try {
      setIsLoading(true);
      await signIn(data);
    } catch (error: any) {  
      setIsLoading(false);  
      setSigInError(error.message);
    }
  }
  
  const t = useTranslations("LoginPage");

  return (
    <>
      {isLoading && <LoginLoading Error={sigInError} />}
      <main className="p-4 flex flex-col h-[calc(100vh-10vh)] justify-between gap-5 lg:max-w-7xl lg:m-auto">
        <section>
          <HeaderCadastros BackFunction={BackToHome} />
          <article className="flex flex-col gap-2 mb-10 mt-10">
            <span className="text-xl font-extrabold text-zinc-700">{t("title")}</span>
            <span className="text-sm font-medium text-zinc-500">{t("subtitle")}</span>
          </article>

          <form className="flex flex-col gap-2 h-full justify-between" method="post" onSubmit={handleSubmit(handleSigin)}>
            <section className="flex flex-col gap-2">
              <label className="labelDef" htmlFor="Email">
                {t("emailLabel")}
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
                {t("passwordLabel")}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <Image src={Lock} alt="Lock Icon" width={20} height={20} />
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center cursor-pointer" onClick={() => setOpenEyes(!openEyes)}>
                  <Image src={openEyes ? OpenedEye : Eyes} alt="Eye Icon" width={20} height={20} />
                </div>
                <input
                  {...register("password")}
                  name="password"
                  type={openEyes ? "text" : "password"}
                  className="inputDef px-7 w-full"
                  placeholder="Digite sua Senha..."
                  required
                />
              </div>

              <div className="w-full mt-6">
                <Link href={"/Login/Recoverpassword"} className="text-[#f14968] text-base font-medium font-['Nunito'] leading-normal">
                  {t("forgotPassword")}
                </Link>
              </div>


              <div>

                <h1 className="text-red-500 text-base font-medium leading-normal">{sigInError}</h1>
              </div>
            </section>
            <div className="w-full mt-6 lg:w-2/4 lg:m-auto cursor-pointer">
              <input type="submit" value={t("loginBtn")} className="Btn_Primary" />
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Page;
