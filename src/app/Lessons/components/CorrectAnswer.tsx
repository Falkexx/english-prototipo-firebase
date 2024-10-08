import CorrectIcon from "@/Midias/Icons/tick-square.svg";
import Image from "next/image";

interface CorrectAnswerProps {
  onNextExercise: () => void; // Função que será chamada ao clicar em "Next Exercise"
}

function CorrectAnswer({ onNextExercise }: CorrectAnswerProps) {
  return (
    <section className="w-[100%] h-[158px] flex flex-col justify-around bg-green-600 fixed bottom-0 left-0 px-4">
      <article className="w-full flex flex-row gap-2">
        <Image src={CorrectIcon} alt="Correto" className="w-6 h-6" />
        <h1 className="text-white text-lg font-bold font-['Nunito'] leading-7">
          Correct!
        </h1>
      </article>

      <button
        className="w-[100%] h-[58px] px-4 py-[18px] bg-white rounded-[100px] shadow justify-center items-center gap-2.5 inline-flex"
        onClick={onNextExercise} // Chama a função passada via props
      >
        <h1 className="grow shrink basis-0 text-center text-green-600 text-base font-extrabold font-['Nunito'] leading-snug tracking-tight">
          Next Exercise
        </h1>
      </button>
    </section>
  );
}

export default CorrectAnswer;
