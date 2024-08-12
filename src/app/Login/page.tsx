"use client"

import AvanceBtn from "@/app/Cadastro/Components/AvanceBtn/index";
import HeaderCadastros from "@/app/Cadastro/Components/Header/index";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Mail from "@/Midias/mail.png";
import Image from "next/image";
import Eyes from "@/Midias/eye-off.png";
import Lock from "@/Midias/lock-closed.png"


function Page() {

    const [progressBar, setProgressBar] = useState(0)
    const router = useRouter()

    function Back() {

        setProgressBar(progressBar - 1)

    }

    function BackToHome() {

        if (progressBar == 0) {

            router.push("/")

        }
    }

    function GoToLoggedHome(){

        router.push("/LoggedHome")

    }


    switch (progressBar) {
        case 0:
            return (
                <>
                    <main className="p-4 flex flex-col min-h-screen gap-5">
                        <HeaderCadastros BackFunction={BackToHome} />

                        <article className="flex flex-col gap-2 mb-10 mt-10">
                            <span className="text-xl font-extrabold text-zinc-700">Bem-vindo(a) de volta!</span>
                            <span className="text-sm font-medium text-zinc-500">Preencha seus dados cadastrados</span>
                        </article>

                        <form className="flex flex-col gap-2">
                            <label className="labelDef">Seu Email</label>

                            <div className="relative">
                                {/* Ícone do Mail */}
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <Image src={Mail} alt="Mail Icon" width={20} height={20} />
                                </div>

                                {/* Input Field */}
                                <input
                                    type="text"
                                    className="inputDef pl-7 w-full"
                                    placeholder="Digite seu Email..."
                                />
                            </div>


                            <label className="labelDef mt-6">Sua Senha</label>

                            <div className="relative">
                                {/* Ícone do Mail */}
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <Image src={Lock} alt="Mail Icon" width={20} height={20} />
                                </div>

                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <Image src={Eyes} alt="Mail Icon" width={20} height={20} />
                                </div>

                                {/* Input Field */}
                                <input
                                    type="password"
                                    className="inputDef px-7 w-full"
                                    placeholder="Digite sua Senha..."
                                />
                            </div>

                            <section className="w-full flex flex-row justify-between mt-4">

                                <div className="flex flex-row gap-2">
                                    <input type='checkbox' className="rounded-xl" />
                                    <span>Manter Conectado</span>
                                </div>

                                <h1 className="text-bg-primary font-bold">Esqueci Minha Senha</h1>

                            </section>
                        </form>

                        <div className="flex-grow"></div>

                        <div className='self-end w-full'>
                            <AvanceBtn AvanceFunction={GoToLoggedHome} ProgressLogin={progressBar} />
                        </div>
                    </main>
                </>
            )
    }
}

export default Page;