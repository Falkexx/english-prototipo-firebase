import axios from 'axios';
import { useQuery } from 'react-query';

function GetPlans() {
    // Usando React Query para buscar dados com revalidação a cada 5 minutos
    const fetchPlans = async () => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/plan/plans`);  // Substitua com a URL da sua API
        return response.data;
    };

    // Utilizando useQuery para realizar a chamada
    const { data, isLoading, error } = useQuery('plans', fetchPlans, {
        staleTime: 300000,  // 5 minutos em milissegundos
    });

    return { plans: data, isLoading, error };
}

export default GetPlans;
