'use client'
import React, { useState, useEffect, useRef } from "react";
import AudioIcon from "@/Midias/Icons/AudioIcon.svg";
import PauseIcon from "@/Midias/Icons/audioPause.svg";
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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setAvailableSuggestions(suggestions);
    setFilledBoxes(Array(placeholdersCount).fill(""));
  }, [suggestions, question]);

  const handleSuggestionClick = (suggestion: string) => {
    const emptyIndex = filledBoxes.findIndex((box) => box === "");
    if (emptyIndex !== -1) {
      const updatedBoxes = [...filledBoxes];
      updatedBoxes[emptyIndex] = suggestion;
      setFilledBoxes(updatedBoxes);
      setAvailableSuggestions(
        availableSuggestions.filter((s) => s !== suggestion)
      );
    }
  };

  const handleBoxClick = (index: number) => {
    const updatedBoxes = [...filledBoxes];
    const removedSuggestion = updatedBoxes[index];
    updatedBoxes[index] = "";
    setFilledBoxes(updatedBoxes);
    setAvailableSuggestions([...availableSuggestions, removedSuggestion]);
  };

  const toggleAudio = () => {
    if (!audioUrl) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.onended = () => setIsPlaying(false);
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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
      <article className="text-zinc-700 text-xl font-extrabold font-['Nunito'] leading-loose">
        <h1>{title}</h1>
      </article>

      {imgUrl && (
        <div className="my-4">
          <img
            src={imgUrl}
            alt="Exercise"
            className="w-full h-auto rounded-[10px] shadow border border-zinc-200"
          />
        </div>
      )}

      {audioUrl && (
        <button onClick={toggleAudio} className="flex items-center gap-2">
          <Image src={isPlaying ? PauseIcon : AudioIcon} alt="Audio Icon" className="w-6 h-6" />
          <span className="text-zinc-700 text-xl font-extrabold font-['Nunito'] leading-loose">
          </span>
        </button>
      )}

      <p className="text-zinc-800 text-lg font-bold font-['Nunito'] leading-7 mt-4">
        {renderedQuestion}
      </p>

      <div className="w-full h-[0px] border border-zinc-200 my-4"></div>

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

      <button
        onClick={() => onCheckAnswers(filledBoxes)}
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
