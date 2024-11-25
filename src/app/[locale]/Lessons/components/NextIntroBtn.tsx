'use client'

import { useState } from "react";
import { useRouter } from "@/i18n/routing";
import BreakDown from "./BreakDown";

function Index({ HaveBreakDown, LessonID }: { HaveBreakDown: boolean; LessonID: string }) {
  const [ShowBreakDown, setShowBreakDown] = useState(false);
  const router = useRouter();

  // Função para lidar com o botão "Next"
  function HandleNextIntroduction() {
    if (HaveBreakDown) {
      setShowBreakDown(true); // Mostra o modal
    } else {
      router.push(`${LessonID}/exercicies`);
    }
  }

  return (
    <>
      {/* Botão "Next" */}
      <button
        className="w-full h-[58px] mt-8 px-4 py-[18px] bg-[#f14968] rounded-[100px] shadow justify-center items-center gap-2.5 inline-flex"
        onClick={HandleNextIntroduction}
      >
        <span className="grow shrink basis-0 text-center text-white text-base font-extrabold font-['Nunito'] leading-snug tracking-tight">
          Next
        </span>
      </button>

      {/* Renderiza o modal do BreakDown se ShowBreakDown for true */}
      {ShowBreakDown && (
        <BreakDown
          onClose={() => setShowBreakDown(false)} // Fecha o modal
          lessonId = {LessonID}
        />
      )}
    </>
  );
}

export default Index;
