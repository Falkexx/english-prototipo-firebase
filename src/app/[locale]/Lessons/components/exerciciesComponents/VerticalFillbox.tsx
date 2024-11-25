import React, { useState, useEffect } from "react";

interface Question {
  question: string;
  correct_answer: string[];
}

interface VerticalFillboxProps {
  title: string;
  questions: Question[];
  suggestions: string[];
  onCheckAnswers: (answers: string[]) => void; // Prop para passar respostas ao componente pai
}

function VerticalFillbox({
  title,
  questions,
  suggestions,
  onCheckAnswers,
}: VerticalFillboxProps) {
  const [availableSuggestions, setAvailableSuggestions] = useState(suggestions);
  const [filledBoxes, setFilledBoxes] = useState<string[]>(
    Array(questions.length).fill("")
  );

  // Resetar estados quando as props mudarem
  useEffect(() => {
    setAvailableSuggestions(suggestions); // Atualiza sugestões disponíveis
    setFilledBoxes(Array(questions.length).fill("")); // Reseta caixas preenchidas
  }, [suggestions, questions]);

  const handleSuggestionClick = (suggestion: string) => {
    const emptyIndex = filledBoxes.findIndex((box) => box === ""); // Encontra a primeira caixa vazia
    if (emptyIndex !== -1) {
      const updatedBoxes = [...filledBoxes];
      updatedBoxes[emptyIndex] = suggestion; // Preenche a caixa
      setFilledBoxes(updatedBoxes);
      setAvailableSuggestions(
        availableSuggestions.filter((s) => s !== suggestion) // Remove a sugestão das opções
      );
    }
  };

  const handleBoxClick = (index: number) => {
    const updatedBoxes = [...filledBoxes];
    const removedSuggestion = updatedBoxes[index]; // Pega a palavra da caixa
    updatedBoxes[index] = ""; // Esvazia a caixa
    setFilledBoxes(updatedBoxes);
    setAvailableSuggestions([...availableSuggestions, removedSuggestion]); // Adiciona a sugestão de volta
  };

  return (
    <section className="w-full mt-4">
      <article className="w-[358px] text-zinc-700 text-xl font-extrabold font-['Nunito'] leading-loose">
        <h1>{title}</h1>
      </article>

      {questions.map((q, index) => (
        <section key={index} className="flex flex-col gap-2 my-4">
          <h2 className="text-zinc-800 text-lg font-bold font-['Nunito'] leading-7">
            {q.question}
          </h2>
          <div
            onClick={() => filledBoxes[index] && handleBoxClick(index)}
            className={`w-[150px] h-10 relative bg-zinc-100 text-center text-base font-bold font-['Nunito'] rounded-[10px] border border-zinc-200 flex items-center justify-center cursor-pointer ${
              filledBoxes[index] ? "bg-white" : ""
            }`}
          >
            {filledBoxes[index]}
          </div>
        </section>
      ))}

      <div className="w-[358px] h-[0px] border border-zinc-200"></div>

      <section className="h-auto min-h-48 px-4 py-4 bg-zinc-100 rounded-[10px] border flex flex-wrap border-zinc-200 justify-start items-center gap-4 my-3">
        {availableSuggestions.map((suggestion, index) => (
          <div
            key={index}
            onClick={() => handleSuggestionClick(suggestion)}
            className="text-zinc-700 text-base font-bold font-['Nunito'] leading-normal cursor-pointer py-2 px-3 bg-white border border-zinc-300 rounded-md shadow-sm hover:bg-zinc-50 transition-all"
          >
            {suggestion}
          </div>
        ))}
      </section>

      {/* Botão de checagem de resposta */}
      <button
        onClick={() => onCheckAnswers(filledBoxes)} // Passa as respostas ao pai
        className="w-[100%] h-[58px] px-4 py-[18px] bg-[#f14968] rounded-[100px] shadow justify-center items-center gap-2.5 inline-flex"
      >
        <span className="grow shrink basis-0 text-center text-white text-base font-extrabold font-['Nunito'] leading-snug tracking-tight">Check Answer</span>
      </button>
    </section>
  );
}

export default VerticalFillbox;
