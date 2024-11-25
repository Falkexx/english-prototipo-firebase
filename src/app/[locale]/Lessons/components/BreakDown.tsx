'use client'
import React, { useState } from "react";
import { useRouter } from "@/i18n/routing";
import ArrowDown from "@/Midias/Icons/arrowDown.svg";
import Image from "next/image";

function BreakDown({ onClose, lessonId }: { onClose: () => void; lessonId: string }) {
  // Estado para controlar quais itens estão expandidos
  const [expanded, setExpanded] = useState<number | null>(null);

  // Função para alternar o estado do item
  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const router = useRouter();

  // Dados dos tópicos
  const TopicsData = [
    {
      id: "1",
      title: "Introduction and Role Assignment",
      description: "This step covers assigning roles and introducing team members to ensure smooth operations.",
      imgUrl: "",
      audio: "",
    },
    {
      id: "2",
      title: "Flight Details and Route Information",
      description: "Details about the flight plan, route, and any key information for the journey.",
      imgUrl: "",
      audio: "",
    },
    {
      id: "3",
      title: "Safety Equipment Check",
      description: "A thorough check of all safety equipment, including life vests and oxygen masks.",
      imgUrl: "",
      audio: "",
    },
    {
      id: "4",
      title: "Emergency Procedures",
      description: "Reviewing emergency procedures and evacuation protocols.",
      imgUrl: "",
      audio: "",
    },
    {
      id: "5",
      title: "Passenger Safety and Security",
      description: "Ensuring passengers are informed and secure for the duration of the flight.",
      imgUrl: "",
      audio: "",
    },
    {
      id: "6",
      title: "Medical Emergencies",
      description: "Discussing how to handle potential medical emergencies during the flight.",
      imgUrl: "",
      audio: "",
    },
    {
      id: "7",
      title: "Coordination with the Flight Deck",
      description: "Establishing effective communication with the flight deck for a seamless operation.",
      imgUrl: "",
      audio: "",
    },
  ];

  // Navegação para exercícios
  function GoToExercises() {
    router.push(`${lessonId}/exercicies`);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // Fecha o modal ao clicar no fundo
    >
      <div
        className="relative w-[90%] max-w-[400px] bg-white rounded-lg shadow-lg p-6"
        onClick={(e) => e.stopPropagation()} // Impede o clique dentro do modal de fechar
      >
        {/* Título do Modal */}
        <div className="mb-4 text-lg font-extrabold text-zinc-800 font-['Nunito'] leading-7">
          Here’s a breakdown of what the Pre-Flight Briefing typically involves
        </div>

        {/* Conteúdo do Acordeão */}
        <div className="flex flex-col gap-4">
          {TopicsData.map((topic, index) => (
            <div key={index} className="border-b border-zinc-200">
              <div
                className="flex justify-between items-center cursor-pointer py-2"
                onClick={() => toggleExpand(index)}
              >
                <div className="text-base font-extrabold text-zinc-800 font-['Nunito'] leading-normal">
                  {topic.id}. {topic.title}
                </div>
                <div className="w-5 h-5">
                  <Image
                    src={ArrowDown}
                    alt="Arrow Icon"
                    className={`transition-transform duration-300 ${
                      expanded === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </div>
              {/* Descrição com animação de altura */}
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ${
                  expanded === index ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <div className="mt-2 text-sm font-normal text-zinc-600">{topic.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão para Fechar */}
        <button
          className="mt-6 w-full px-4 py-[12px] bg-[#f14968] text-white text-base font-extrabold rounded-[100px] shadow-md"
          onClick={GoToExercises}
        >
          Start exercises
        </button>
      </div>
    </div>
  );
}

export default BreakDown;
