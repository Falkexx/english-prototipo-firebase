import axios from 'axios'

type Props = {

  email: string
  newPassword: string
  token: string
}

async function ChangePassword(email:string, token:string, newPassword:string ): Promise<{message: 'success' | 'fail'}>{

  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/change-password`, {email: email, token: token, new_password: newPassword}, {
      headers: {
        'Accept':'*/*',
        'Content-Type':'application/json'
      }
    })

    return response.data as {message: 'success' | 'fail'}
    
  } catch (error) {
    console.log(Error)
  }

  return {message: 'fail'}

}

export default ChangePassword;