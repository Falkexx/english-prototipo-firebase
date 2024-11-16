'use client'

import Image from "next/image";
import CreditCard from '@/Midias/Icons/CreditCard.png';
import { useState } from "react";
import CardForms from "./CardForms";
import { useSubscription } from '@/contexts/SubscribtionPayment'; // Import useSubscription corretamente

function ChoseACard() {
    const [isCreditCardSelected, setIsCreditCardSelected] = useState(false);

    
    const { cardData } = useSubscription(); // Hook para o contexto

    const cards = [
        {
            icon: CreditCard,
            institution: 'Credit card'
        },
    ];

    // Alterna a seleção do método de pagamento
    function handleMethod() {
        setIsCreditCardSelected(true);  // Define como true para exibir o modal
    }

    // Fecha o modal de CardForms
    function handleCloseCardForm() {
        setIsCreditCardSelected(false); // Define como false para ocultar o modal
    }

    return (
        <section>
            <article className="my-5">
                <h1 className="w-[100%] text-center text-zinc-800 text-xl font-extrabold font-['Nunito'] leading-loose">
                    Escolha seu Método de Pagamento
                </h1>
            </article>

            <section className="flex flex-col gap-5 mt-5">
                {cards.map((card) => (
                    <div
                        key={card.institution}
                        onClick={handleMethod}
                        className={`w-full font-bold px-6 py-5 rounded-3xl border-2 flex justify-between items-center gap-4 cursor-pointer ${
                            isCreditCardSelected
                                ? 'border-red-500 bg-[#FEF4F6]' // Estilo selecionado
                                : 'border-zinc-100 bg-white'    // Estilo padrão
                        }`}
                    >
                        <div className="flex flex-row gap-2 items-center">
                            <Image alt='Payment method icon' src={card.icon} className="h-14 w-14" />
                            <h1 className="font-bold">{card.institution}</h1>
                        </div>
                        <div>
                            <input type='radio' checked={isCreditCardSelected} readOnly />
                        </div>
                    </div>
                ))}
            </section>

            {/* Renderiza CardForms se isCreditCardSelected for verdadeiro */}
            {isCreditCardSelected ? <CardForms onClose={handleCloseCardForm} /> : ''}
        </section>
    );
}

export default ChoseACard;
