import axios from 'axios';

async function CheckTokenIsValid(
  token: string,
  email: string
): Promise<{ message: 'success' | 'fail' }> {
  if (token) {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/check-token-is-valid`,
        { token: token, email: email },
        {
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response.data);
      
      return response.data as { message: 'success' | 'fail' };
    } catch (error) {
      console.error('Erro:', error);
      throw error;
    }
  }

  return { message: 'fail' };
}

export default CheckTokenIsValid;