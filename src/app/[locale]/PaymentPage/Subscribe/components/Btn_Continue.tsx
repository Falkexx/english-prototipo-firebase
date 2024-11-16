import { useSubscription } from '@/contexts/SubscribtionPayment';
import { useRouter } from 'next/navigation';

function Btn_Continue({ planDetails }: any) {
    const { setPlan } = useSubscription();
    const router = useRouter();

    function SavePlanOnContext(details: any) {
        if (!details) {
            return window.alert("Selecione um plano");
        } else {
            setPlan(details);  // Salva os dados completos do plano no contexto
            router.push('Subscribe/PaymentMethod');
        }
    }

    return (
        <button className="Btn_Primary" onClick={() => SavePlanOnContext(planDetails)}>
            Continuar
        </button>
    );
}

export default Btn_Continue;
