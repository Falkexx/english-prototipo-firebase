import { getAuth, onAuthStateChanged, User } from "firebase/auth";

interface UserDTO {
  id: string;
  name: string | null;
  email: string | null;
  number_phone: string | null;
  date_of_birth: string | null;
  avatar_url: string | null;
  country: string;
  exp: number;
  role: "STUDENT" | "TEACHER" | "ADMIN";
  is_premium: boolean;
  created_at: string;
  updated_at: string;
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
      is_premium: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
  }

  // 🔹 Espera o Firebase carregar os dados do usuário
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuário autenticado:", user);

        const userData: UserDTO = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          number_phone: user.phoneNumber || null,
          date_of_birth: "1990-01-01",
          avatar_url: user.photoURL || null,
          country: "Brazil",
          exp: 1739121824,
          role: "STUDENT", // Ajuste conforme necessário
          is_premium: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        resolve(userData);
      } else {
        console.log("Nenhum usuário autenticado.");
        resolve(null);
      }
    });
  });
}

export default GetUserDatas;
