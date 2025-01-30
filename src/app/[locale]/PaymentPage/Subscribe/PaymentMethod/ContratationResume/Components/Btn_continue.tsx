import { useRouter } from 'next/navigation';
import { useSubscription } from '@/contexts/SubscribtionPayment';
import SendPayment from '@/services/SendPayment';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext'; // Supondo que existe um AuthContext para pegar o token

// 🟢 Defina o tipo das props
interface BtnContinueProps {
    handleProgress: () => void;
}

function Btn_continue({ handleProgress }: BtnContinueProps) {
    const { plan, cardData } = useSubscription();
    const { token } = useContext(AuthContext);
    let disabled_Btn = false;

    const handleClick = async () => {
        try {
            if (!token || !plan || !cardData) {
                alert("Dados incompletos para realizar o pagamento. Volte para a tela de Planos");
                disabled_Btn = true;
                return;
            }
            await SendPayment(token, plan, cardData);
            handleProgress();
            
        } catch (error) {
            alert("Erro ao processar o pagamento. Tente novamente.");
        }
    };

    return (
        <button onClick={handleClick} className="Btn_Primary" disabled={disabled_Btn}>
            Confirmar pagamento
        </button>
    );
}

export default Btn_continue;
