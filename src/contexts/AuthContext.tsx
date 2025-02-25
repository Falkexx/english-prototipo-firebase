"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { setCookie, destroyCookie, parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

// FIREBASE IMPORTS
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { authenticate, db } from "@/Server/FirebaseDb"; // 🔹 Importando Firestore
import { doc, setDoc } from "firebase/firestore"; // 🔹 Firestore

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: { email: string; password: string }) => Promise<void>;
  signUp: (data: {
    email: string;
    password: string;
    country: string;
    name: string;
  }) => Promise<void>;
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
    const tokenFromCookie = cookies["nextauth.token"] || null;
    setToken(tokenFromCookie);
    setIsAuthenticated(!!tokenFromCookie);
  }, []);

  async function signIn({ email, password }: { email: string; password: string }) {
    try {
      const userCredentials = await signInWithEmailAndPassword(authenticate, email, password);
      const user = userCredentials.user;

      if (user) {
        console.log("Usuário logado:", user);
        const accessToken = await user.getIdToken(); // Obtém o token correto

        setCookie(undefined, "nextauth.token", accessToken, {
          maxAge: 60 * 60 * 1,
          path: "/",
        });

        setToken(accessToken);
        setIsAuthenticated(true);
        router.push("/Home");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }

  async function signUp({ email, password, country, name }: { email: string; password: string; country: string; name: string }) {
    try {
      const userCredential = await createUserWithEmailAndPassword(authenticate, email, password);
      const user = userCredential.user;

      if (user) {
        await updateProfile(user, { displayName: name });

        // 🔹 Criando documento no Firestore
        await setDoc(doc(db, "users", user.uid), {
          UID: user.uid,
          name: name,
          plan: "free",
          created_at: new Date().toISOString(),
          sections_done:[],
          modules_done:[],
          chapters_done:[],
        });

        const accessToken = await user.getIdToken(); // Obtém o token correto

        setCookie(undefined, "nextauth.token", accessToken, {
          maxAge: 60 * 60 * 1,
          path: "/",
        });

        setToken(accessToken);
        setIsAuthenticated(true);
        router.push("/Home");
      } else {
        console.error("Usuário não encontrado após a criação.");
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }

  function logout() {
    destroyCookie(undefined, "nextauth.token", { path: "/" });
    setToken(null);
    setIsAuthenticated(false);
    router.push("/");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, logout, token, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
