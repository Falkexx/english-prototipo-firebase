"use client";

import Header from "@/app/[locale]/Home/Components/Header";
import AssinaturaContainer from "@/app/[locale]/Home/Components/AssinaturaContainer";
import ModuleContainer from "./Components/ModuleContainer";
import ShowSections from "./Components/ShowSections";
import ShowChapters from "./Components/ShowChapters";
import { useState, useContext, useEffect } from "react";
import BottomHeader from "./Components/BottomHeader";
import { AuthContext } from "@/contexts/AuthContext"; // Autenticação via contexto
import NotAuthenticaded from "@/Components/NotAuthenticaded";
import Loading from "@/Components/Loading";
import {Link} from '@/i18n/routing';


function LoggedHome() {
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(
    "16092024153320972"
  );
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento

  const { isAuthenticated } = useContext(AuthContext); // Utilizando a função de login via contexto

  useEffect(() => {
    // Simulando carregamento e verificação de autenticação
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100)); // 1 segundo de delay
      setLoading(false); // Definindo o carregamento como false após a verificação
    };

    checkAuth();
  }, []);

  // Função que será passada para o ShowSections para atualizar o estado da seção
  const handleSelectSection = (sectionId: string) => {
    setSelectedSectionId(sectionId);
    setSelectedModuleId(null); 
  };

  const handleSelectModule = (moduleId: string) => {
    setSelectedModuleId(moduleId); 
  };

  if (loading) {
    return <Loading/>;
  }

  if (!isAuthenticated) {
    return <NotAuthenticaded />;
  }

  return (
    <>
      <Header />

      <main className="w-full px-4 overflow-x-hidden mb-20 ">
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

      <section>
        <BottomHeader ActualPath="Home" />
      </section>
    </>
  );
}

export default LoggedHome;
