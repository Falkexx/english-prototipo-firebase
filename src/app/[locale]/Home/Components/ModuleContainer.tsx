"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import GetUserDatas from "@/services/GetUserDatas"; // Função para pegar dados do usuário
import nookies from "nookies"; // Importando nookies
import ShowChapters from "./ShowChapters";
import { motion, AnimatePresence } from "framer-motion";

function ModuleContainer({
  sectionId,
  onSelectModule,
}: {
  sectionId: string;
  onSelectModule: (id: string) => void;
}) {
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const token = "user-auth-token"; // Exemplo de token, substitua conforme sua lógica de autenticação
  const { data: userData, isLoading: isLoadingUser } = useQuery(
    ["userData"],
    () => GetUserDatas(token),
    { enabled: !!token }
  );

  // Função para buscar os módulos baseados no sectionId
  const fetchModulesBySection = async () => {
    return [
      {
        id: "1",
        section_id: "1",
        chapters_quantity: "8",
        name: "Learning fly",
        description: "English for cabin crew",
        difficulty: "Easy",
        image_url: "...",
        exp_as_done: 10,
      },
      {
        id: "2",
        section_id: "1",
        chapters_quantity: "8",
        name: "Advanced English",
        description: "English for pilots",
        difficulty: "Medium",
        image_url: "...",
        exp_as_done: 15,
      },
    ];
  };

  const { data: modulesData = [], isLoading } = useQuery(
    ["modules", sectionId],
    fetchModulesBySection,
    {
      enabled: !!sectionId, // Só faz a requisição se sectionId for válido
    }
  );

  return (
    <section className="mt-9">
      {isLoading ? (
        <div>Loading modules...</div>
      ) : modulesData.length > 0 ? (
        modulesData
          .filter((module) => module.section_id == sectionId)
          .map((module: any) => (
            <div key={module.id}>
              <div
                className="w-full h-20 bg-blue-500 rounded-tl-2xl rounded-bl-2xl rounded-tr-3xl rounded-br-3xl relative mb-4 cursor-pointer"
                onClick={() =>
                  setSelectedModuleId(
                    selectedModuleId === module.id ? null : module.id
                  )
                }
              >
                <article className="flex flex-col gap-2 text-white pl-2 pt-2 leading-normal">
                  <h1 className="font-extrabold font-['Nunito']">{module.name}</h1>
                  <p>{module.description}</p>
                </article>
              </div>
              {/* Renderiza os capítulos abaixo do módulo selecionado */}
              <AnimatePresence>
                {selectedModuleId === module.id && (
                  <motion.div
                    className="my-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ShowChapters moduleId={module.id} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
      ) : (
        <div>No modules found for this section.</div>
      )}
    </section>
  );
}

export default ModuleContainer;