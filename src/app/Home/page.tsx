"use client";

import Header from "@/app/Home/Components/Header";
import AssinaturaContainer from "@/app/Home/Components/AssinaturaContainer";
import ModuleContainer from "./Components/ModuleContainer";
import ShowSections from "./Components/ShowSections";
import ShowChapters from "./Components/ShowChapters";
import { useState } from "react";
import BottomHeader from "./Components/BottomHeader";


function LoggedHome() {
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>('16092024153320972');
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  // Função que será passada para o ShowSections para atualizar o estado da seção
  const handleSelectSection = (sectionId: string) => {
    setSelectedSectionId(sectionId);
    setSelectedModuleId(null); // Resetar o moduleId ao selecionar nova seção
  };

  // Função que será passada para o ModuleContainer para atualizar o estado do módulo
  const handleSelectModule = (moduleId: string) => {
    setSelectedModuleId(moduleId); // Atualiza o moduleId selecionado
  };

  return (
    <>
      <Header />

      <main className="w-full px-4 overflow-x-hidden">
        <AssinaturaContainer />
        <ShowSections onSelectSection={handleSelectSection} />
        {selectedSectionId && (
          <ModuleContainer
            sectionId={selectedSectionId}
            onSelectModule={handleSelectModule}
          />
        )}
        {selectedModuleId && <ShowChapters moduleId={selectedModuleId} />}
      </main>

      <section >
        <BottomHeader ActualPath="Home"/>
      </section>
    </>
  );
}

export default LoggedHome;
