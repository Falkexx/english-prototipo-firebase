"use client"

import AvanceBtn from "../Cadastro/Components/AvanceBtn";
import HeaderCadastros from "../Cadastro/Components/Header";
import { useState } from "react";
import { useRouter } from 'next/navigation'


function Page() {

    const [progressBar, setProgressBar] = useState(0)
    const router = useRouter()

    function Avance() {

        setProgressBar(progressBar + 1)
    }

    function Back() {

        setProgressBar(progressBar - 1)

    }

    function BackToHome() {

        if (progressBar == 0) {

            router.push("/")

        }

    }


    switch (progressBar) {
        case 0:
            return (
                <>
                    <main className="p-4 flex flex-col h-screen gap-5">
                        <HeaderCadastros BackFunction={BackToHome} />

                            <article className="flex flex-col gap-2 mb-10 mt-10">
                                <span className="text-xl font-extrabold text-zinc-700">Bem-vindo(a) de volta!</span>
                                <span className="text-sm font-medium text-zinc-500">Preencha seus dados cadastrados</span>
                            </article>

                            <div className="flex flex-col gap-2 mb-6">
                                <label className="labelDef">Seu Email</label>
                                <input type="email" placeholder="Digite seu email..." className="inputDef"/>
                            </div>

                            <div className="flex flex-col gap-2 mb-6">
                                <label className="labelDef">Senha</label>
                                <input type="password" placeholder="Digite sua senha..." className="inputDef"/>
                            </div>

                        <AvanceBtn AvanceFunction={Avance} ProgressLogin={progressBar} />
                    </main>
                </>
            )

        case 1:
            return (
                <>
                 <main className="p-4 flex flex-col justify-between h-screen gap-5">
                 <HeaderCadastros BackFunction={Back} />

                 <AvanceBtn AvanceFunction={Avance} ProgressLogin={progressBar} />
                 </main>
                </>
            )
    }
}

export default Page;