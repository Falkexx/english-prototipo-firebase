import React, { useState, useEffect } from "react";

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
}

function Alternatives({
  title,
  description,
  questions,
  correctAnswer,
  onCheckAnswers,
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

export default Alternatives;
