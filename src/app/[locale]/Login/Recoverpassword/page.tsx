"use client";

import HeaderCadastros from "@/app/[locale]/Signup/Components/Header";
import EmailContainer from "./components/EmailContainer";
import NewPasswordContainer from "./components/NewPasswordContainer";
import TokenContainer from "./components/TokenContaier";
import SucefullScreen from "./components/SucefullScreen";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function Recoverpassword() {
  const [progressBar, setProgressBar] = useState(0);

  const router = useRouter();
  const[email, setEmail] = useState('')
  const[token, setToken]=useState('')
  const[password, setPassword] = useState('')
  const[confirmPassword, setConfirmedPassword] = useState('')

  function BackToHome() {
    router.push("/Login");
  }

  useEffect(()=>{
  },[email, token, password, confirmPassword])
  function Avance() {
    setProgressBar(progressBar + 1);
  }

  function Back() {
    setProgressBar(progressBar - 1);
  }

  switch (progressBar) {
    case 0:
      return (
        <section className="p-4 flex flex-col gap-4">
          <HeaderCadastros BackFunction={BackToHome} />
          <main>
            <EmailContainer avancar={Avance} GetEmail={setEmail} />
          </main>
        </section>
      );

    case 1:
      return (
        <section className="p-4 flex flex-col gap-4">
          
          <HeaderCadastros BackFunction={Back} />

          <main>
            <TokenContainer avancar={Avance} GetToken={setToken} email={email} />
          </main>
        </section>
      );

    case 2:
      return (
        <section className="px-4 pt-4 flex flex-col gap-2">
          <main>
            <NewPasswordContainer avancar={Avance} GetPassword={setPassword} GetConfirmedPassword={setConfirmedPassword} email={email} token={token} />
          </main>
        </section>
      );

    case 3:
      return (
        <section className="px-4 pt-4 flex flex-col gap-2">
          <main>
            <SucefullScreen email={email} password={password} />
          </main>
        </section>
      );
  }
}

export default Recoverpassword;
