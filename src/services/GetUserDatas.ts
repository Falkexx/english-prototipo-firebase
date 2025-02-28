import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/Server/FirebaseDb"; // 🔹 Importando o Firestore


type Chapter = {
  slug: string;
  moduleId: string;
};
export interface UserDTO {
  id: string;
  name: string | null;
  email: string | null;
  number_phone: string | null;
  date_of_birth: string | null;
  avatar_url: string | null;
  country: string;
  exp: number;
  role: "STUDENT" | "TEACHER" | "ADMIN";
  plan: "free" | "premium" | "standard";
  created_at: string;
  updated_at: string;
  sections_done: string[];
  modules_done: string[];
  chapters_done: Chapter[];
}

async function GetUserDatas(token: string): Promise<UserDTO | null> {
  const mockedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."; // Token mockado
  const auth = getAuth();

  // 🔹 Se for um token mockado, retorna um usuário fixo
  if (token === mockedToken) {
    return {
      id: "1773dfd0-5c9e-4c47-8b91-1c7a5b489aae",
      name: "Renata",
      email: "RenataAdmin",
      number_phone: null,
      date_of_birth: "1990-01-01",
      avatar_url: null,
      country: "Brazil",
      exp: 1739121824,
      role: "ADMIN",
      plan: "free",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      sections_done:[],
      modules_done:[],
      chapters_done:[],
    };
  }

  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {

        try {
          // 🔹 Buscando os dados do Firestore com base no UID
          const userDocRef = doc(db, "users", user.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userDataFromFirestore = userDocSnap.data();

            const userData: UserDTO = {
              id: user.uid,
              name: userDataFromFirestore.name || user.displayName,
              email: user.email,
              number_phone: userDataFromFirestore.number_phone || null,
              date_of_birth: userDataFromFirestore.date_of_birth || "1990-01-01",
              avatar_url: user.photoURL || null,
              country: userDataFromFirestore.country || "Brazil",
              exp: userDataFromFirestore.exp || 1739121824,
              role: userDataFromFirestore.role || "STUDENT",
              plan: userDataFromFirestore.plan || "",
              created_at: userDataFromFirestore.created_at || new Date().toISOString(),
              updated_at: userDataFromFirestore.updated_at || new Date().toISOString(),
              sections_done:userDataFromFirestore.sections_done || [],
              modules_done:userDataFromFirestore.modules_done || [],
              chapters_done: userDataFromFirestore.chapters_done || [],
            };

            resolve(userData);

          } else {
            console.log("Usuário não encontrado no Firestore.");
            resolve(null);
          }
        } catch (error) {
          console.error("Erro ao buscar dados do Firestore:", error);
          resolve(null);
        }
      } else {
        console.log("Nenhum usuário autenticado.");
        resolve(null);
      }
    });
  });
}

export default GetUserDatas;
