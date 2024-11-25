import axios from 'axios';

// Função para realizar o pagamento
async function SendPayment(token:any, plan:any, cardData:any) {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/v1/student/by/card`,
            {
                plan_name: plan.unique_name,
                installments: 10, 
                cpf_cnpj:cardData.cpf, 
                card: {
                    holder: cardData.holder, 
                    number: cardData.cardNumber,
                    expiry_month: cardData.expiry.split('/')[0],
                    expiry_year: cardData.expiry.split('/')[1],
                    cvv: cardData.cvc,
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        throw new Error("Erro ao processar o pagamento.");
    }
}

export default SendPayment;
