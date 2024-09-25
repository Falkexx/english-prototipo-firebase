"use client";

import HeaderCadastros from "@/app/Signup/Components/Header";
import EmailContainer from "./components/EmailContainer";
import NewPasswordContainer from "./components/NewPasswordContainer";
import TokenContainer from "./components/TokenContaier";
import SucefullScreen from "./components/SucefullScreen";

import { useRouter } from "next/navigation";
import { useState } from "react";

function Recoverpassword() {
  const [progressBar, setProgressBar] = useState(0);

  const router = useRouter();

  function BackToHome() {
    router.push("/Login");
  }

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
            <EmailContainer avancar={Avance} />
          </main>
        </section>
      );

    case 1:
      return (
        <section className="p-4 flex flex-col gap-4">
          
          <HeaderCadastros BackFunction={Back} />

          <main>
            <TokenContainer avancar={Avance} />
          </main>
        </section>
      );

    case 2:
      return (
        <section className="px-4 pt-4 flex flex-col gap-2">
          <HeaderCadastros BackFunction={Back} />
          <main>
            <NewPasswordContainer avancar={Avance} />
          </main>
        </section>
      );

    case 3:
      return (
        <section className="px-4 pt-4 flex flex-col gap-2">
          <HeaderCadastros BackFunction={Back} />
          <main>
            <SucefullScreen avancar={Avance} />
          </main>
        </section>
      );
  }
}

export default Recoverpassword;
