import axios from 'axios'

async function GenerateToken(email:string){

  if(email){
    try {

      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/generate-token`, {email: email}, {
        headers: {
          'Accept':'*/*',
          'Content-Type':'application/json',
        }

      });

      return response.data;
      
    } catch (error) {
      console.log(error)
      throw error
    }
  }


}


export default GenerateToken;