import closeIcon from "@/Midias/Icons/x.svg";
import Image from "next/image";
import { Link } from "@/i18n/routing";

interface ExerciciesProgressBarProps {
  LessonsAmount: number; // Quantidade total de lições
  currentLesson: number; // Número da lição atual (baseado em 1)
}

function ExerciciesProgressBar({
  LessonsAmount,
  currentLesson,
}: ExerciciesProgressBarProps) {
  const progressPercentage = (currentLesson / LessonsAmount) * 100; // Calcula o preenchimento da barra

  return (
    <header className="w-[100%] flex flex-row items-center justify-between">
      <Link href='/Home'>
        <Image src={closeIcon} alt="Close Icon" />
      </Link>

      {/* Barra de progresso */}
      <div className="relative w-3/4 h-2.5 bg-zinc-200 rounded-2xl">
        <div
          className="absolute top-0 left-0 h-full bg-[#F14968] rounded-2xl transition-all"
          style={{ width: `${progressPercentage}%` }} // Preenchimento da barra
        ></div>
      </div>

      <h1 className="text-zinc-700 text-base font-medium font-['Nunito'] leading-normal">
        {currentLesson}/{LessonsAmount}
      </h1>
    </header>
  );
}

export default ExerciciesProgressBar;
