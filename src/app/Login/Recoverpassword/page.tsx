"use client";

import HeaderCadastros from "@/app/Signup/Components/Header";
import { useRouter } from "next/navigation";

function Recoverpassword() {
  const router = useRouter();

  function BackToHome() {
    router.push("/Login");
  }

  return (
    <>
      <HeaderCadastros BackFunction={BackToHome} />
      <main>
        
      </main>
    </>
  );
}

export default Recoverpassword;
