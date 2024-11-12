import axios from "axios";
import { User } from "firebase/auth";

interface UserDTO  {

  id: string;
  name: string;
  email: string;
  number_phone: string | null;
  date_of_birth: string | null; // ISO date format, e.g., "2003-05-14"
  avatar_url: string | null;
  country: string;
  exp: number;
  role: 'STUDENT' | 'TEACHER' | 'ADMIN'; // Enum-like type for role
  is_premium: boolean;
  created_at: string; // ISO date format
  updated_at: string; // ISO date format
}

async function GetUserDatas(token: string):Promise<UserDTO>{

  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/student/current`, {
    headers: {

      "Accept":"*/*",
      "Authorization":`Bearer ${token}`,
      "Content-Type":"application/json"
      
    }
  })

  return response.data

}

export default GetUserDatas;