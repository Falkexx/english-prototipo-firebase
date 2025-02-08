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

async function GetUserDatas(token: string){

  const mockedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMxNGJmODU0LTdmMmUtNDRmYi1hZTc0LWI2Njk3ZTM3MzRiZCIsImlzUHJlbWl1bSI6ZmFsc2UsImVtYWlsIjoiQW5kcmVAdGVzdGUuY29tIiwicm9sZXMiOlsiU1RVREVOVCJdLCJpYXQiOjE3MzkwMzI1OTEsImV4cCI6MTczOTExODk5MX0.hmWI5KQ9r_O2KB4amSDbsu8HZ6cQ7acjBWdPKXpqHAM"

  const response: UserDTO = {
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
    
  } 

  if(token == mockedToken){

    return response
  }



  //const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/student/current`, {
    //headers: {
 
      //"Accept":"*/*",
      //"Authorization":`Bearer ${token}`,
      //"Content-Type":"application/json"
      
    //}
  //})

  
  


  //return response.data

}

export default GetUserDatas;