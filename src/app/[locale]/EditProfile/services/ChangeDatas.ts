export interface DataProps {
  name: string;
  date_of_birth: string;
  number_phone: string;
  country: string;
  avatar_url: string;
}

async function ChangeDatas(data: DataProps, token: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/student`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      // Exibe a mensagem de erro no console, caso o servidor retorne um erro
      const errorData = await response.json();
      console.error("Error updating data:", errorData);
      throw new Error(`Request failed with status ${response.status}`);
    }

    // Retorna os dados da resposta JSON
    return await response.json();
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
}

export default ChangeDatas;
