import React, { useState, useEffect } from "react";
import AudioIcon from "@/Midias/Icons/AudioIcon.svg";
import Image from "next/image";
interface HorizontalFillboxProps {
  title: string;
  question: string; // Frase com placeholders ($)
  suggestions: string[]; // Sugestões para preencher
  imgUrl?: string; // URL da imagem opcional
  audioUrl?: string; // URL do áudio opcional
  onCheckAnswers: (answers: string[]) => void; // Callback para validar respostas
}

function HorizontalFillbox({
  title,
  question,
  suggestions,
  imgUrl,
  audioUrl,
  onCheckAnswers,
}: HorizontalFillboxProps) {
  const placeholdersCount = (question.match(/\$/g) || []).length; // Conta os "$" na frase
  const [availableSuggestions, setAvailableSuggestions] = useState(suggestions);
  const [filledBoxes, setFilledBoxes] = useState<string[]>(
    Array(placeholdersCount).fill("")
  );
  const [isPlaying, setIsPlaying] = useState(false); // Controle do áudio

  // Reseta estado quando props mudam
  useEffect(() => {
    setAvailableSuggestions(suggestions); // Reseta sugestões disponíveis
    setFilledBoxes(Array(placeholdersCount).fill("")); // Esvazia as caixas preenchidas
  }, [suggestions, question]);

  const handleSuggestionClick = (suggestion: string) => {
    const emptyIndex = filledBoxes.findIndex((box) => box === ""); // Encontra a primeira caixa vazia
    if (emptyIndex !== -1) {
      const updatedBoxes = [...filledBoxes];
      updatedBoxes[emptyIndex] = suggestion; // Preenche a caixa
      setFilledBoxes(updatedBoxes);
      setAvailableSuggestions(
        availableSuggestions.filter((s) => s !== suggestion) // Remove a sugestão das disponíveis
      );
    }
  };

  const handleBoxClick = (index: number) => {
    const updatedBoxes = [...filledBoxes];
    const removedSuggestion = updatedBoxes[index]; // Pega a palavra removida
    updatedBoxes[index] = ""; // Esvazia a caixa
    setFilledBoxes(updatedBoxes);
    setAvailableSuggestions([...availableSuggestions, removedSuggestion]); // Adiciona a sugestão de volta
  };

  const playAudio = () => {
    if (!audioUrl) return;
    const audio = new Audio(audioUrl);
    setIsPlaying(true);
    audio.play();
    audio.onended = () => setIsPlaying(false); // Para o controle do áudio quando terminar
  };

  // Substitui os "$" na questão pelo componente de preenchimento
  const renderedQuestion = question.split("$").map((segment, index) => (
    <React.Fragment key={index}>
      {segment}
      {index < placeholdersCount && (
        <span
          onClick={() => filledBoxes[index] && handleBoxClick(index)}
          className={`inline-flex justify-center items-center align-middle w-[80px] h-[40px] text-center bg-zinc-100 border border-zinc-200 rounded-[10px] mx-1 font-bold text-base cursor-pointer ${
            filledBoxes[index] ? "bg-white" : ""
          }`}
        >
          {filledBoxes[index]}
        </span>
      )}
    </React.Fragment>
  ));

  return (
    <section className="w-full mt-4">
      {/* Título do exercício */}
      <article className="text-zinc-700 text-xl font-extrabold font-['Nunito'] leading-loose">
        <h1>{title}</h1>
      </article>

      {/* Imagem */}
      {imgUrl && (
        <div className="my-4">
          <img
            src="https://i.ibb.co/2nLngFG/with-luggage-aircraft-crew-work-uniform-is-together-outdoors-near-plane-1.png"
            alt="Exercise"
            className="w-full h-auto rounded-[10px] shadow border border-zinc-200"
          />
        </div>
      )}

      {/* Botão de áudio */}
      {audioUrl && (
        <button onClick={playAudio} className="">
          <Image src={AudioIcon} alt="Icone" />
        </button>
      )}

      {/* Frase com os campos de preenchimento */}
      <p className="text-zinc-800 text-lg font-bold font-['Nunito'] leading-7 mt-4">
        {renderedQuestion}
      </p>

      {/* Separador */}
      <div className="w-full h-[0px] border border-zinc-200 my-4"></div>

      {/* Sugestões disponíveis */}
      <section className="h-auto px-4 py-4 rounded-[10px] border flex flex-wrap border-zinc-200 justify-start items-center gap-4 my-3">
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

      {/* Botão para checar respostas */}
      <button
        onClick={() => onCheckAnswers(filledBoxes)} // Passa respostas ao pai
        className="w-[100%] h-[58px] px-4 py-[18px] bg-[#f14968] rounded-[100px] shadow justify-center items-center gap-2.5 inline-flex"
      >
        <span className="grow shrink basis-0 text-center text-white text-base font-extrabold font-['Nunito'] leading-snug tracking-tight">
          Check Answer
        </span>
      </button>
    </section>
  );
}

export default HorizontalFillbox;
