"use client";

import Header from "@/app/[locale]/Home/Components/Header";
import AssinaturaContainer from "@/app/[locale]/Home/Components/AssinaturaContainer";
import ModuleContainer from "./Components/ModuleContainer";
import ShowSections from "./Components/ShowSections";
import ShowChapters from "./Components/ShowChapters";
import { useState, useContext, useEffect } from "react";
import BottomHeader from "./Components/BottomHeader";
import { AuthContext } from "@/contexts/AuthContext"; // Autenticação via contexto
import Loading from "@/Components/LoadingHome";
import { Link } from "@/i18n/routing";
import { FaArrowRight } from "react-icons/fa6";
import Sidebar from "./Components/Desktop/Sidebar/Sidebar";

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

  return (
    <Loading>
      <section className="lg:w-full lg:flex lg:flex-row lg:gap-8">
        <div className="hidden lg:block lg:w-[23%]">
          <Sidebar ActualPath="Home"/>
        </div>

        <div className="lg:hidden">
          <Header />
        </div>

        <main className="w-full px-4 overflow-x-hidden mb-20 lg:w-[60%]">
          <section className="mt-4 lg:hidden">
            <Link
              href="/Recheck"
              className="w-full h-[60px] px-4 py-[18px] bg-[#f14968] rounded-[100px] shadow-[4px_8px_24px_0px_rgba(241,73,104,0.25)] justify-center items-center gap-3 inline-flex"
            >
              <p className="text-center text-white text-base font-extrabold leading-snug tracking-tight">
                Recheck for Cabin Crew
              </p>

              <i className="text-white">
                <FaArrowRight />
              </i>
            </Link>
          </section>

          <div className="lg:hidden">
            <AssinaturaContainer />
          </div>
          <ShowSections onSelectSection={handleSelectSection} />
          {selectedSectionId && (
            <ModuleContainer
              sectionId={selectedSectionId}
              onSelectModule={handleSelectModule}
            />
          )}
          {selectedModuleId && <ShowChapters moduleId={selectedModuleId} />}
        </main>

        <section className="lg:hidden">
          <BottomHeader ActualPath="Home" />
        </section>
      </section>
    </Loading>
  );
}

export default LoggedHome;
