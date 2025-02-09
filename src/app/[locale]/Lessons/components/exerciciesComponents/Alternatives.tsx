import React, { useState, useEffect } from "react";
import audioIcon from "@/Midias/Icons/AudioIcon.svg";
import Image from "next/image";
interface AlternativeQuestion {
  letter: string;
  question: string;
}

interface AlternativesProps {
  title: string;
  description: string;
  questions: AlternativeQuestion[];
  correctAnswer: string; // Resposta correta
  onCheckAnswers: (isCorrect: boolean) => void; // Callback para informar se a resposta está correta
  isOnRecheck: boolean,
  img_url: string;
}

function Alternatives({
  title,
  description,
  questions,
  correctAnswer,
  onCheckAnswers,
  isOnRecheck,
  img_url,
}: AlternativesProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null); // Alternativa selecionada

  useEffect(() => {
    setSelectedAnswer(null); // Reseta a resposta selecionada ao mudar de exercício
  }, [title]);

  const handleAnswerClick = (letter: string) => {
    setSelectedAnswer(letter); // Define a alternativa selecionada
  };

  const handleCheckAnswer = () => {
    const isCorrect = selectedAnswer === correctAnswer; // Verifica se a resposta está correta
    onCheckAnswers(isCorrect); // Passa o resultado para o componente pai
    console.log('está correta')
  };

  if(isOnRecheck){

    return (
      <section className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Image src={audioIcon} alt="audio icon" className="w-6 h-6" />
          <h1 className="text-zinc-800 text-lg font-bold leading-7">
            {title}
          </h1>
        </div>
  
        <section className="flex flex-col gap-3">
          {questions.map((i) => (
            <section
              key={i.letter}
              onClick={() => handleAnswerClick(i.letter)}
              className={`flex flex-col gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all
                ${
                  selectedAnswer === i.letter
                    ? "border-[#f14968] bg-[#f14968]/10" // Estilo selecionado
                    : "border-zinc-100"
                }`}
            >
              <div className="w-full flex flex-row justify-between items-center">
                <h1
                  className={`text-lg font-bold leading-7 ${
                    selectedAnswer === i.letter ? "text-[#f14968]" : "text-zinc-800"
                  }`}
                >
                  {i.letter}
                </h1>
                <Image src={audioIcon} alt="audio icon" className="w-6 h-6" />
              </div>
              <p className="text-zinc-800 text-sm font-semibold leading-tight">
                {i.question}
              </p>
            </section>
          ))}
        </section>

        <button
          onClick={handleCheckAnswer} // Verifica a resposta
          className="w-full h-[58px] mt-6 px-4 py-[18px] bg-[#f14968] rounded-[100px] shadow justify-center items-center inline-flex"
          disabled={!selectedAnswer} // Desativa o botão se nenhuma alternativa estiver selecionada
        >
          <span className="text-center text-white text-base font-extrabold font-['Nunito'] leading-snug tracking-tight">
            Next
          </span>
        </button>
  
      </section>
    );

    
  }else{
    
    return (
      <div className="w-full h-auto relative bg-white p-4">
        <div className="text-zinc-700 text-xl font-extrabold font-['Nunito'] leading-loose mb-4">
          {title}
        </div>
        <div className="text-zinc-800 text-lg font-bold font-['Nunito'] leading-7 mb-6">
          {description}
        </div>
        <div className="flex flex-col gap-4">
          {questions.map((q) => (
            <div
              key={q.letter}
              onClick={() => handleAnswerClick(q.letter)} // Seleciona a alternativa
              className={`self-stretch px-6 py-5 bg-white rounded-3xl border-2 cursor-pointer ${
                selectedAnswer === q.letter
                  ? "border-[#f14968] bg-[#f14968]/10" // Destaque para a resposta selecionada
                  : "border-zinc-100"
              } flex items-center gap-4`}
            >
              <div
                className={`w-[30px] h-[30px] flex items-center justify-center rounded-full shadow border ${
                  selectedAnswer === q.letter
                    ? "bg-[#f14968] text-white"
                    : "bg-zinc-100 text-zinc-800"
                }`}
              >
                {q.letter}
              </div>
              <div className="grow shrink basis-0 text-zinc-800 text-lg font-bold font-['Nunito'] leading-7">
                {q.question}
              </div>
            </div>
          ))}
        </div>
  
        {/* Botão de checar resposta */}
        <button
          onClick={handleCheckAnswer} // Verifica a resposta
          className="w-full h-[58px] mt-6 px-4 py-[18px] bg-[#f14968] rounded-[100px] shadow justify-center items-center inline-flex"
          disabled={!selectedAnswer} // Desativa o botão se nenhuma alternativa estiver selecionada
        >
          <span className="text-center text-white text-base font-extrabold font-['Nunito'] leading-snug tracking-tight">
            Check Answer
          </span>
        </button>
      </div>
    );
  }
}

export default Alternatives;
