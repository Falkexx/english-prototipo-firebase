import { useRouter } from 'next/navigation';
import { useSubscription } from '@/contexts/SubscribtionPayment';
import SendPayment from '@/services/SendPayment';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext'; // Supondo que existe um AuthContext para pegar o token

function Btn_continue() {
    const { plan, cardData } = useSubscription();
    const { token } = useContext(AuthContext);
    const router = useRouter();
    let disabled_Btn = false

    const handleProgress = async () => {
        try {
            if (!token || !plan || !cardData) {
                alert("Dados incompletos para realizar o pagamento. Volte para a tela de Planos");
                disabled_Btn = true;
                return;
            }
            
            // Chama o serviço de pagamento
            await SendPayment(token, plan, cardData);
            
            // Em caso de sucesso, redireciona para a tela de sucesso
            router.push('/bem-sucedido'); // Altere o caminho conforme necessário
        } catch (error) {
            alert("Erro ao processar o pagamento. Tente novamente.");
        }
    };

    return (
        <button onClick={handleProgress} className="Btn_Primary" disabled={disabled_Btn}>
            Confirmar pagamento
        </button>
    );
}

export default Btn_continue;
