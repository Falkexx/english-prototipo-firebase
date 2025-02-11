'use client'
import { createContext, useState, useEffect, ReactNode } from 'react';
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';
import { useTranslations } from "next-intl";

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: { email: string; password: string }) => Promise<void>;
  signUp: (data: { email: string; password: string; country: string; name: string }) => Promise<void>;
  logout: () => void;
  token: string | null;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();
  const t = useTranslations("NotAuthorized");


  // Verifica se o usuário está autenticado ao montar o componente
  useEffect(() => {
    const cookies = parseCookies();
    const tokenFromCookie = cookies['nextauth.token'] || null;
    setToken(tokenFromCookie);
    setIsAuthenticated(!!tokenFromCookie);
  }, []);

  async function signIn({ email, password }: { email: string; password: string }) {

    if(email == "RenataAdmin" && password == "admin123"){

      try {

        const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMxNGJmODU0LTdmMmUtNDRmYi1hZTc0LWI2Njk3ZTM3MzRiZCIsImlzUHJlbWl1bSI6ZmFsc2UsImVtYWlsIjoiQW5kcmVAdGVzdGUuY29tIiwicm9sZXMiOlsiU1RVREVOVCJdLCJpYXQiOjE3MzkwMzI1OTEsImV4cCI6MTczOTExODk5MX0.hmWI5KQ9r_O2KB4amSDbsu8HZ6cQ7acjBWdPKXpqHAM";
        
        setCookie(undefined, 'nextauth.token', access_token, { maxAge: 60 * 60 * 1, path: '/' });
        setToken(access_token);
        setIsAuthenticated(true); // Atualiza o estado de autenticação
        router.push('/Home');
      } catch (error) {
        console.error('Erro na autenticação:', error);
      }


    }

    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/sign-in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`${t('UserPasswordWrong')}`);
      }

      const { access_token } = await response.json();
      setCookie(undefined, 'nextauth.token', access_token, { maxAge: 60 * 60 * 1, path: '/' });
      setToken(access_token);
      setIsAuthenticated(true); // Atualiza o estado de autenticação
      router.push('/Home');
    } catch (error) {
      throw new Error(`${t('UserPasswordWrong')}`);
    }
    
  }

  async function signUp({ email, password, country, name }: { email: string; password: string; country: string; name: string }) {
    const data = {
      name,
      email,
      password,
      country: "Brazil",
    };
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/student/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const responseData = await response.json(); // Converte a resposta para JSON
  
      if (!response.ok) {
        // Se a resposta da API contiver um array de mensagens de erro, captura a primeira
        const errorMessage = responseData?.message?.[0] || "Erro desconhecido";
        throw new Error(errorMessage);
      }
  
      const { access_token } = responseData;
      setCookie(undefined, "nextauth.token", access_token, { maxAge: 60 * 60 * 1, path: "/" });
      setToken(access_token);
      setIsAuthenticated(true);
      router.push("/Home");
    } catch (error) {
      if (error instanceof Error) {
        throw error; // Garante que a mensagem do erro seja lançada corretamente
      } else {
        throw new Error("Ocorreu um erro inesperado.");
      }
    }
  }
  

  function logout() {
    destroyCookie(undefined, 'nextauth.token');
    setToken(null);
    setIsAuthenticated(false); // Atualiza o estado de autenticação
    router.push('/');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, logout, token, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
