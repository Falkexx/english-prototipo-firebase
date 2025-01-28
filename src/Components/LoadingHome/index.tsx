"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import NotAuthenticaded from "@/Components/NotAuthenticaded";

// Skeleton do Header
function SkeletonHeader() {
  return (
    <header className="w-full px-4 py-8 border-b">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-14 w-14 rounded-full bg-gray-300 animate-pulse"></div>
          <div className="flex flex-col gap-2">
            <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-3 w-16 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="h-8 w-8 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </header>
  );
}

// Skeleton do AssinaturaContainer
function SkeletonAssinaturaContainer() {
  return (
    <section className="mt-4 w-full">
      <div className="w-full h-[154px] bg-gray-300 rounded-2xl animate-pulse relative flex flex-col justify-between px-6 py-6">
        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-10 w-32 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="absolute right-3 bottom-3 h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
}

// Skeleton do ShowSections
function SkeletonShowSections() {
  return (
    <section className="w-full mt-14 flex flex-row gap-4 lg:gap-20 lg:w-fit lg:pl-8 lg:justify-center">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="h-[45px] w-[120px] bg-gray-300 rounded-[100px] animate-pulse"
        ></div>
      ))}
    </section>
  );
}

// Skeleton do ModuleContainer
function SkeletonModuleContainer() {
  return (
    <section className="mt-9 w-full">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="w-full h-20 bg-gray-300 rounded-tl-2xl rounded-bl-2xl rounded-tr-3xl rounded-br-3xl relative mb-4 flex flex-row items-center px-4"
        >
          <div className="flex flex-col gap-2">
            <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-3 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="absolute -right-3 -top-1 bg-gray-200 rounded-full h-[86px] w-[86px] flex justify-center items-center animate-pulse"></div>
        </div>
      ))}
    </section>
  );
}

// Componente principal de carregamento
function Loading({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
  const { isAuthenticated } = useContext(AuthContext); // Estado de autenticação

  useEffect(() => {
    const checkAuth = async () => {
      // Espera a resposta do estado de autenticação real
      if (isAuthenticated !== undefined) {
        setLoading(false); // Termina o estado de carregamento quando receber o valor
      }
    };

    checkAuth();
  }, [isAuthenticated]); // Reexecuta o efeito sempre que `isAuthenticated` mudar

  if (loading) {
    return (
      <main className="flex flex-col items-center min-h-screen bg-gray-100 w-full px-4">
        {/* Skeleton Loader da HomePage */}
        <SkeletonHeader />
        <SkeletonAssinaturaContainer />
        <SkeletonShowSections />
        <SkeletonModuleContainer />
      </main>
    );
  }

  if (!isAuthenticated) {
    return <NotAuthenticaded />;
  }

  return <>{children}</>;
}

export default Loading;
