import axios from 'axios';
import { useQuery } from 'react-query';

function GetPlans() {

    const plans = [
        {
        "unique_name": "STANDARD",
        "value": 500,
        "description": "Description....",
        "discount": "10% OFF",
        "expires_in_mouths": 3
        },
        {
        "unique_name": "PLUS",
        "value": 888,
        "description": "Description....",
        "discount": "20% OFF",
        "expires_in_mouths": 6
        },
        {
        "unique_name": "PREMIUM",
        "value": 1333,
        "description": "Description....",
        "discount": "40% OFF",
        "expires_in_mouths": 12
        }
        ]

    /*
    
    // Usando React Query para buscar dados com revalidação a cada 5 minutos
    const fetchPlans = async () => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/plan/plans`);  // Substitua com a URL da sua API
        return response.data;
    };

    // Utilizando useQuery para realizar a chamada
    const { data, isLoading, error } = useQuery('plans', fetchPlans, {
        staleTime: 300000,  // 5 minutos em milissegundos
    });
    
    */

    //return { plans: data, isLoading, error };

    return plans



}

export default GetPlans;
