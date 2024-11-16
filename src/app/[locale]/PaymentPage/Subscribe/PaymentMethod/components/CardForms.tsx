'use client';

import { useState } from "react";
import { useSubscription } from '@/contexts/SubscribtionPayment';
import { useRouter } from 'next/navigation';
import InputMask from 'react-input-mask'; // Importa o InputMask

function CardForms({ onClose, actualPath }: any) {
    const router = useRouter();

    const [cardDetails, setCardDetails] = useState({
        holder: "",
        number: "",
        expiry_month: "",
        expiry_year: "",
        cvv: "",
        cpf: "" // Adiciona o campo CPF ao estado inicial
    });

    const { setCardData: setContextCardData, cardData } = useSubscription();

    const [isFlipped, setIsFlipped] = useState(false);
    const [sendinToResume, setSendinToResume] = useState(false);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    const isFormValid = () => {
        return Object.values(cardDetails).every(value => value.trim() !== "");
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (isFormValid()) {
            // Salvar os dados do cartão no contexto
            setContextCardData({
                cardNumber: cardDetails.number,
                expiry: `${cardDetails.expiry_month}/${cardDetails.expiry_year}`,
                cvc: cardDetails.cvv,
                holder: cardDetails.holder,
                cpf: cardDetails.cpf // Inclui o CPF ao salvar no contexto
            });

            if (actualPath == 'resume') {
                onClose();
            } else {
                router.push('PaymentMethod/ContratationResume');
            }
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">&times;</button>

                <div className="w-full h-48 perspective">
                    <div className={`relative w-full h-full transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''} transform-style-3d`}>
                        <div className="absolute w-full h-full bg-blue-700 text-white p-4 rounded-lg transform backface-hidden">
                            <h3 className="text-lg font-bold mb-4">Cartão de Crédito</h3>
                            <p className="mb-1">{cardDetails.holder || "Nome do Titular"}</p>
                            <p className="text-xl tracking-wider mb-4">{cardDetails.number || "**** **** **** ****"}</p>
                            <p className="text-sm">{cardDetails.expiry_month || "MM"}/{cardDetails.expiry_year || "AAAA"}</p>
                        </div>
                        <div className="absolute w-full h-full bg-gray-800 text-white p-4 rounded-lg transform rotate-y-180 backface-hidden">
                            <h3 className="text-lg font-bold mb-4">Código de Segurança (CVV)</h3>
                            <p className="text-xl tracking-wider">{cardDetails.cvv || "***"}</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-6">
                    <label className="block mb-2">
                        Nome do Titular
                        <input
                            type="text"
                            name="holder"
                            value={cardDetails.holder}
                            onChange={handleInputChange}
                            className="w-full p-2 mt-1 border rounded"
                            required
                            onFocus={() => setIsFlipped(false)}
                        />
                    </label>
                    <label className="block mb-2">
                        Número do Cartão
                        <input
                            type="text"
                            name="number"
                            value={cardDetails.number}
                            onChange={handleInputChange}
                            className="w-full p-2 mt-1 border rounded"
                            maxLength="19"
                            required
                            onFocus={() => setIsFlipped(false)}
                        />
                    </label>

                    {/* Novo campo de CPF com máscara */}
                    <label className="block mb-2">
                        CPF
                        <InputMask
                            mask="999.999.999-99"
                            name="cpf"
                            value={cardDetails.cpf}
                            onChange={handleInputChange}
                            className="w-full p-2 mt-1 border rounded"
                            required
                        />
                    </label>

                    <div className="flex gap-2 mb-2">
                        <label className="flex-1">
                            Mês
                            <input
                                type="text"
                                name="expiry_month"
                                value={cardDetails.expiry_month}
                                onChange={handleInputChange}
                                className="w-full p-2 mt-1 border rounded"
                                maxLength="2"
                                required
                                onFocus={() => setIsFlipped(false)}
                            />
                        </label>
                        <label className="flex-1">
                            Ano
                            <input
                                type="text"
                                name="expiry_year"
                                value={cardDetails.expiry_year}
                                onChange={handleInputChange}
                                className="w-full p-2 mt-1 border rounded"
                                maxLength="4"
                                required
                                onFocus={() => setIsFlipped(false)}
                            />
                        </label>
                    </div>
                    <label className="block mb-4">
                        CVV
                        <input
                            type="text"
                            name="cvv"
                            value={cardDetails.cvv}
                            onChange={handleInputChange}
                            className="w-full p-2 mt-1 border rounded"
                            maxLength="3"
                            required
                            onFocus={() => setIsFlipped(true)}
                        />
                    </label>

                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
                    >
                        {sendinToResume ? "Processando...Um momento" : "Salvar"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CardForms;
