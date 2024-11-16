import { useSubscription } from '@/contexts/SubscribtionPayment';
import CardForms from '../../components/CardForms'; // Importa o componente CardForms
import { useState } from 'react';
import { Link } from '@/i18n/routing';

function Resume() {
    const { plan, cardData } = useSubscription();
    const [isEditingCard, setIsEditingCard] = useState(false);

    // Função para fechar o CardForms
    const handleCloseCardForm = () => {
        setIsEditingCard(false);
    };

    // Extrai os dados necessários do plano
    const planName = plan?.unique_name || "Plano não selecionado";
    const planDuration = plan?.expires_in_mouths ? `${plan.expires_in_mouths} Meses` : "Duração não especificada";
    const planPrice = plan ? `$${(plan.value / 100).toFixed(2)}` : "$0.00";
    const planDiscount = plan?.discount || "Sem desconto";
    const totalPrice = plan ? `$${((plan.value / 100) * 0.8).toFixed(2)}` : "$0.00"; // Exemplo com desconto de 20%

    // Máscara do número do cartão
    const maskedCardNumber = cardData?.cardNumber
        ? `•••• •••• •••• ${cardData.cardNumber.slice(-4)}`
        : "Cartão não cadastrado";

    if(planName == "Plano não selecionado" || maskedCardNumber == "Cartão não cadastrado"){

        return(

            <div>

                <h1>Houve um erro ao processar sua compra. Faça o processo novamente</h1>

                <Link href="/PaymentPage/Subscribe">
                    Ir para tela de planos
                </Link>
            </div>
        )
    }else{

        return (
            <section>
                <h1 className="text-zinc-800 text-xl font-extrabold font-['Nunito'] leading-loose">Resumo da Contratação</h1>
    
                <div className="w-full h-52 p-6 bg-neutral-50 rounded-3xl border-2 border-zinc-100 flex-col justify-center items-start gap-4 inline-flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-justify text-zinc-500 text-base font-medium font-['Nunito'] leading-normal">Assinatura {planName}</div>
                        <div className="text-justify text-zinc-700 text-base font-bold font-['Nunito'] leading-normal">{planDuration}</div>
                    </div>
    
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-justify text-zinc-500 text-base font-medium font-['Nunito'] leading-normal">Preço</div>
                        <div className="text-justify text-zinc-700 text-base font-bold font-['Nunito'] leading-normal">{planPrice}</div>
                    </div>
    
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-justify text-zinc-500 text-base font-medium font-['Nunito'] leading-normal">Desconto</div>
                        <div className="text-justify text-zinc-700 text-base font-bold font-['Nunito'] leading-normal">{planDiscount}</div>
                    </div>
    
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-justify text-zinc-500 text-base font-medium font-['Nunito'] leading-normal">Pagamento Total</div>
                        <div className="text-justify text-[#f14968] text-base font-bold font-['Nunito'] leading-normal">{totalPrice}</div>
                    </div>
                </div>
    
                <div className="text-zinc-700 text-xl font-extrabold font-['Nunito'] leading-loose">Método de Pagamento</div>
    
                {isEditingCard ? (
                    <CardForms onClose={handleCloseCardForm} actualPath="resume" />
                ) : (
                    <div className="w-full h-24 px-6 py-5 bg-white rounded-3xl border-2 border-zinc-100 justify-start items-center gap-4 inline-flex">
                        <div className="w-14 h-14 justify-center items-center flex">
                            <img className="w-14 h-14 rounded-full" src="https://via.placeholder.com/56x56" />
                        </div>
                        <div className="text-justify text-zinc-700 text-lg font-bold font-['Nunito'] leading-[28.80px]">
                            {maskedCardNumber}
                        </div>
                        <div
                            className="grow shrink basis-0 text-right text-[#f14968] text-sm font-bold font-['Nunito'] leading-tight cursor-pointer"
                            onClick={() => setIsEditingCard(true)}
                        >
                            Alterar
                        </div>
                    </div>
                )}
            </section>
        );

    }

}

export default Resume;
