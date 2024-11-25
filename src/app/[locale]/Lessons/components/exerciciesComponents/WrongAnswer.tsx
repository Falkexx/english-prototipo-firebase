import { useEffect, useState } from "react";
import WrongIcon from "@/Midias/close-square.svg";
import Image from "next/image";

interface WrongAnswerProps {
  onRetryLesson: () => void; // Função que será chamada ao clicar em "Ok"
}

function WrongAnswer({ onRetryLesson }: WrongAnswerProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Inicia a animação ao montar o componente
    setAnimate(true);

    // Remove o componente após 800ms
    const timer = setTimeout(() => {
      setAnimate(false); // Inicia a animação de saída
      setTimeout(() => onRetryLesson(), 500); // Aguarda a animação de saída antes de chamar a função
    }, 800); // Mantém a tela cheia por 800ms

    return () => clearTimeout(timer); // Limpa o timer se o componente desmontar
  }, [onRetryLesson]);

  return (
    <section
      className={`fixed top-0 left-0 w-full h-screen bg-[#f14968] flex flex-col justify-center items-center transition-transform duration-500 z-50 ${
        animate ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Cabeçalho de resposta errada */}
      <article className="flex flex-col items-center gap-4">
        <Image src={WrongIcon} alt="Errado" className="w-12 h-12" />
        <h1 className="text-white text-2xl font-bold font-['Nunito'] leading-7">
          Wrong!
        </h1>
      </article>
    </section>
  );
}

export default WrongAnswer;
