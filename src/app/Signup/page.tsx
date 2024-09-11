'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Container from "./Components/Container";
import BemVindo from "./Components/Telas/Welcome";
import HeaderCadastros from "./Components/Header";
import AvanceBtn from "./Components/AvanceBtn";
import EnglishLevel from './Components/Telas/EnglishLevel';
import ReasonToStudy from "./Components/Telas/ReasonToStudy";
import Skills from './Components/Telas/Skills';
import Difficulty from "./Components/Telas/Difficulty";
import Age from "./Components/Telas/Age";
import TimeToStudy from "./Components/Telas/TimeToStudy";
import SignUpConclusion from "./Components/Telas/SignUpConclusion";
import YourName from "./Components/Telas/YourName";
import YourEmail from "./Components/Telas/YourEmail";
import YourPsswrd from "./Components/Telas/YourPsswrd";
import Loading from "./Components/Telas/Loading";
import AlternativesConclusion from "./Components/Telas/AlternativesConclusion";

export default function Index() {
    const [progressBar, setProgressBar] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    function Avance() {
        setProgressBar(progressBar + 1);
    }

    function Back() {
        setProgressBar(progressBar - 1);
    }

    function BackToHome() {
        if (progressBar === 0) {
            router.push("/");
        }
    }

    function GoToLoggedHome() {
        if (progressBar === 12) {
            // Send the collected data to the backend
            const data = {
                name,
                email,
                password,
                country: "Brazil" 
            };

            fetch('http://localhost:3000/student/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(result => {
                    console.log('Success:', result);
                    router.push("/Home");
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }

    return (
        <>
            {progressBar === 0 && (
                <main className="p-4 flex flex-col justify-around h-[calc(100vh-15vh)] gap-5">
                    <HeaderCadastros BackFunction={BackToHome} />
                    <Container>
                        <BemVindo />
                    </Container>
                    <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                </main>
            )}
            {progressBar === 1 && (
                <main className="p-4 h-full flex flex-col justify-between min-h-screen relative gap-5">
                    <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                    <EnglishLevel />
                    <div className="relative my-3 w-full">
                        <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                    </div>
                </main>
            )}
            {progressBar === 2 && (
                <main className="p-4 flex flex-col min-h-screen justify-between gap-5">
                    <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                    <ReasonToStudy />
                    <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                </main>
            )}
            {progressBar === 3 && (
                <main className="p-4 flex flex-col justify-between min-h-screen gap-5">
                    <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                    <Skills />
                    <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                </main>
            )}
            {progressBar === 4 && (
                <main className="p-4 flex flex-col justify-between min-h-screen gap-5">
                    <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                    <Difficulty />
                    <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                </main>
            )}
            {progressBar === 5 && (
                <main className="p-4 flex flex-col justify-between min-h-screen gap-5">
                    <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                    <Age />
                    <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                </main>
            )}
            {progressBar === 6 && (
                <main className="p-4 flex flex-col justify-between min-h-screen gap-5">
                    <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                    <TimeToStudy />
                    <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                </main>
            )}
            {progressBar === 7 && (
                <main className="p-4 flex flex-col justify-between h-[calc(100vh-15vh)] gap-5">
                    <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                    <AlternativesConclusion />
                    <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                </main>
            )}
            {progressBar === 8 && (
                <main className="p-4 flex flex-col h-[calc(100vh-15vh)] gap-5">
                    <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                    <YourName onNameChange={setName} />
                    <div className="flex-grow"></div>
                    <div className="self-end w-full">
                        <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                    </div>
                </main>
            )}
            {progressBar === 9 && (
                <main className="p-4 flex flex-col h-[calc(100vh-15vh)] gap-5">
                    <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                    <YourEmail Nome={name} onEmailChange={setEmail} />
                    <div className="flex-grow"></div>
                    <div className="self-end w-full">
                        <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                    </div>
                </main>
            )}
            {progressBar === 10 && (
                <main className="p-4 flex flex-col h-[calc(100vh-15vh)] gap-5">
                    <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                    <YourPsswrd onPasswordChange={setPassword} />
                    <div className="flex-grow"></div>
                    <div className="self-end w-full">
                        <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                    </div>
                </main>
            )}
            {progressBar === 11 && (
                <main className="p-4 flex flex-col h-[calc(100vh-15vh)] gap-5">
                    <HeaderCadastros BackFunction={Back} ProgressBarStatus={progressBar} />
                    <Loading />
                    <div className="flex-grow"></div>
                    <div className="self-end w-full">
                        <AvanceBtn AvanceFunction={Avance} ProgressStatus={progressBar} />
                    </div>
                </main>
            )}
            {progressBar === 12 && (
                <main className="p-4 flex flex-col h-[calc(100vh-15vh)] gap-5">
                    <div className='m-auto'>
                        <SignUpConclusion />
                    </div>
                    <div className="self-end w-full">
                        <AvanceBtn AvanceFunction={GoToLoggedHome} ProgressStatus={progressBar} />
                    </div>
                </main>
            )}
        </>
    );
}
