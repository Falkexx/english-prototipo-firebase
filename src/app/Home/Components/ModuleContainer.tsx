"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

function ModuleContainer({
  sectionId,
  onSelectModule,
}: {
  sectionId: string;
  onSelectModule: (id: string) => void;
}) {
  const [progress, setProgress] = useState(0); // Estado inicial da progress bar

  // Função para buscar os módulos baseados no sectionId
  const fetchModulesBySection = async () => {
    const { data } = await axios.get(
      `http://localhost:3000/module/all?take=10&skip=0&sectionId=${sectionId}`
    );
    return data;
  };

  const { data: modulesData = [], isLoading } = useQuery(
    ["modules", sectionId],
    fetchModulesBySection,
    {
      enabled: !!sectionId, // Só faz a requisição se sectionId for válido
    }
  );

  // Função para calcular o preenchimento do círculo com base na porcentagem de progresso
  const circleRadius = 34;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const progressOffset =
    circleCircumference - (progress / 100) * circleCircumference;

  return (
    <section className="mt-9">
      {isLoading ? (
        <div>Loading modules...</div>
      ) : modulesData.length > 0 ? (
        modulesData.map((module: any) => (
          <div
            key={module.id}
            className="w-full h-20 bg-blue-500 rounded-tl-2xl rounded-bl-2xl rounded-tr-3xl rounded-br-3xl relative mb-4"
            onClick={() => onSelectModule(module.id)} // Envia o ID do módulo selecionado
          >
            <article className="flex flex-col gap-2 text-white pl-2 pt-2 leading-normal">
              <h1 className="font-extrabold font-['Nunito']">{module.name}</h1>
              <p>{module.description}</p>
            </article>

            {/* Progress Bar em Círculo */}
            <section className="absolute -right-3 -top-1 bg-white rounded-full h-[86px] w-[86px] flex justify-center items-center">
              <svg
                className="w-20 h-20 transform rotate-[-90deg]"
                width="80"
                height="80"
                viewBox="0 0 80 80"
              >
                <circle
                  cx="40"
                  cy="40"
                  r={circleRadius}
                  stroke="#f5f5f5"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="40"
                  cy="40"
                  r={circleRadius}
                  stroke="#f14968"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={progressOffset}
                />
              </svg>
              <div className="absolute text-black text-sm font-bold">
                {progress}%
              </div>
            </section>
          </div>
        ))
      ) : (
        <div>No modules found for this section.</div>
      )}
    </section>
  );
}

export default ModuleContainer;
