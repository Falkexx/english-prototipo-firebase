import { useState } from 'react';
import Image from "next/image";
import Mail from "@/Midias/mail.png";

interface YourEmailProps {
    onEmailChange: (email: string) => void;
    Nome: string;
}

function YourEmail({ Nome, onEmailChange }: YourEmailProps) {
    const [email, setEmail] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        onEmailChange(e.target.value);
    };

    return (
        <section className="flex flex-col gap-8 mt-6">
            <h1 className="text-zinc-800 text-xl font-bold font-['Nunito'] leading-loose">
                Obrigado, {Nome}! Agora, qual é o seu endereço de email?
            </h1>

            <form className="flex flex-col gap-2">
                <label className="labelDef">Seu Email</label>

                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <Image src={Mail} alt="Mail Icon" width={20} height={20} />
                    </div>
                    <input
                        type="email"
                        className="inputDef pl-7 w-full"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </section>
    );
}

export default YourEmail;
