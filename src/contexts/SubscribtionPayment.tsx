"use client";

import { createContext, useContext, useState } from 'react';

interface SubscriptionData {
    plan: {
        unique_name: string;
        value: number;
        description: string;
        discount: string;
        expires_in_mouths: number;
    } | null;
    paymentMethod: string | null;
    cardData: { cardNumber: string; expiry: string; cvc: string; holder:string; cpf:string } | null;
    setPlan: (plan: {
        unique_name: string;
        value: number;
        description: string;
        discount: string;
        expires_in_mouths: number;
    }) => void;
    setPaymentMethod: (method: string) => void;
    setCardData: (data: { cardNumber: string; expiry: string; cvc: string; holder:string; cpf:string; }) => void;
}

const SubscriptionContext = createContext<SubscriptionData | undefined>(undefined);

export const SubscriptionProvider = ({ children }: { children: React.ReactNode }) => {
    const [plan, setPlan] = useState<SubscriptionData['plan']>(null);
    const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
    const [cardData, setCardData] = useState<{ cardNumber: string; expiry: string; cvc: string; holder:string; cpf:string } | null>(null);

    return (
        <SubscriptionContext.Provider value={{ plan, paymentMethod, cardData, setPlan, setPaymentMethod, setCardData }}>
            {children}
        </SubscriptionContext.Provider>
    );
};

export const useSubscription = () => {
    const context = useContext(SubscriptionContext);
    if (!context) {
        throw new Error("useSubscription must be used within a SubscriptionProvider");
    }
    return context;
};
