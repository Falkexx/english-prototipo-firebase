'use client'

import { useState } from "react";
import Container from "./Components/Container";
import BemVindo from "./Components/Telas/Welcome";
import HeaderCadastros from "./Components/Header";
import AvanceBtn from "./Components/AvanceBtn";
import { useRouter } from 'next/navigation'
import EnglishLevel from './Components/Telas/EnglishLevel'
import ReasonToStudy from "./Components/Telas/ReasonToStudy";
import Skills from './Components/Telas/Skills';
import Difficulty from "./Components/Telas/Difficulty";
import Age from "./Components/Telas/Age";
import TimeToStudy from "./Components/Telas/TimeToStudy";

export default function index() {


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

                    <main className=" px-4 flex flex-col justify-around h-screen gap-5">

                        <HeaderCadastros BackFunction={BackToHome} />

                        <Container>
                            <BemVindo />
                        </Container>

                        <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />

                    </main>


                </>
            )

        case 1:
            return (

                <>

                    <main className="p-4 flex flex-col justify-between h-screen gap-5">
                        <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                        <EnglishLevel />
                        <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />

                    </main>
                </>
            )

        case 2:

            return (

                <>

                    <main className="p-4 flex flex-col justify-between h-screen gap-5">
                        <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                        <ReasonToStudy />
                        <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                    </main>
                </>
            )

        case 3:

            return (

                <>

                    <main className="p-4 flex flex-col justify-between h-screen gap-5">
                        <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                        <Skills />
                        <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                    </main>
                </>
            )

        case 4:

            return (

                <>

                    <main className="p-4 flex flex-col justify-between h-screen gap-5">
                        <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                        <Difficulty />
                        <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                    </main>
                </>
            )

        case 5:

            return (

                <>

                    <main className="p-4 flex flex-col justify-between h-screen gap-5">
                        <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                        <Age />
                        <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                    </main>
                </>
            )

        case 6:

            return (

                <>

                    <main className="p-4 flex flex-col justify-between h-screen gap-5">
                        <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                        <TimeToStudy />
                        <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                    </main>
                </>
            )

        default:
            return (

                <>
                    <h1>Erro inesperado. Reinicie a página.</h1>
                </>
            );
    }




}