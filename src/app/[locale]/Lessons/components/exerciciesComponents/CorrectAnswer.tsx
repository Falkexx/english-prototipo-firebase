import { useEffect, useState } from "react";
import CorrectIcon from "@/Midias/Icons/tick-square.svg";
import Image from "next/image";

interface CorrectAnswerProps {
  onNextExercise: () => void; // Função que será chamada ao clicar em "Next Exercise"
}

function CorrectAnswer({ onNextExercise }: CorrectAnswerProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Inicia a animação ao montar o componente
    setAnimate(true);

    // Remove o componente após 2 segundos
    const timer = setTimeout(() => {
      setAnimate(false); // Começa a animação de saída
      setTimeout(() => onNextExercise(), 500); // Aguarda a animação de saída antes de chamar o próximo exercício
    }, 800); // Mantém a tela cheia por 2 segundos

    return () => clearTimeout(timer); // Limpa o timer se o componente desmontar
  }, [onNextExercise]);

  return (
    <section
      className={`fixed top-0 left-0 w-full h-screen bg-green-600 flex flex-col justify-center items-center transition-transform duration-500 z-50 ${
        animate ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <article className="flex flex-col items-center gap-4">
        <Image src={CorrectIcon} alt="Correto" className="w-12 h-12" />
        <h1 className="text-white text-2xl font-bold font-['Nunito'] leading-7">
          Correct!
        </h1>
      </article>
    </section>
  );
}

export default CorrectAnswer;
