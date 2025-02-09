'use client'

import { useState } from 'react';
import { useSubscription } from '@/contexts/SubscribtionPayment';
import Btn_Continue from './Btn_Continue';
import GetPlans from '@/services/GetPlans';  // Importe GetPlans para obter dados da API

function ChooseAPlan() {
    const [selectedPlan, setSelectedPlan] = useState<any>(null);
    const [planDetails, setPlanDetails] = useState<any>(null);

    //const { plans, isLoading, error } = GetPlans(); // Usando GetPlans para obter os planos

    const plans = GetPlans(); // Usando GetPlans para obter os planos


    const handleSelectPlan = (plan: any) => {
        setSelectedPlan(plan.unique_name);
        setPlanDetails(plan);
    };

    //if (isLoading) return <p>Carregando planos...</p>;
    //if (error) return <p>Erro ao carregar planos.</p>;

    return (
        <section className="w-full flex flex-col gap-5 mt-5">
            <h1 className="w-[100%] text-center text-zinc-800 text-xl font-extrabold font-['Nunito'] leading-loose">
                Escolha seu Plano de Assinatura
            </h1>

            <section className="flex flex-col gap-5">
                {plans.map((planOption: any) => (
                    <article
                        key={planOption.value}
                        onClick={() => handleSelectPlan(planOption)}
                        style={{
                            borderColor: selectedPlan === planOption.unique_name ? "var(--color-red-default)" : "",
                            backgroundColor: selectedPlan === planOption.unique_name ? "#FEF4F6" : "",
                            borderWidth: selectedPlan === planOption.unique_name ? "3px" : "",
                        }}
                        className="w-full py-5 px-6 rounded-3xl border-2 border-zinc-100 flex flex-row justify-between cursor-pointer"
                    >
                        <div>
                            <h1 className="text-zinc-800 text-lg font-bold font-['Nunito'] leading-7">{planOption.unique_name}</h1>
                            <span className="text-zinc-400 text-sm font-medium font-['Nunito'] leading-tight" dangerouslySetInnerHTML={{ __html: planOption.description }}></span>
                        </div>
                        <h2 className="text-[#f14968] text-lg font-extrabold font-['Nunito'] leading-7">${planOption.value / 100}</h2>
                    </article>
                ))}
            </section>

            <Btn_Continue planDetails={planDetails} />
        </section>
    );
}

export default ChooseAPlan;
