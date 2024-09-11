import { useState } from 'react';
import Image from "next/image";
import Eyes from "@/Midias/eye-off.png";
import Lock from "@/Midias/lock-closed.png";

interface YourPsswrdProps {
    onPasswordChange: (password: string) => void;
}

function YourPsswrd({ onPasswordChange }: YourPsswrdProps) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        onPasswordChange(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <section className="flex flex-col gap-14 mt-6">
            <h1 className="text-zinc-800 text-xl font-bold font-['Nunito'] leading-loose">
                Última etapa! Define uma senha de acesso para sua conta.
            </h1>

            <form className="flex flex-col">
                <label className="labelDef">Sua Senha</label>

                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <Image src={Lock} alt="Lock Icon" width={20} height={20} />
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <Image src={Eyes} alt="Eye Icon" width={20} height={20} />
                    </div>
                    <input
                        type="password"
                        className="inputDef px-7 w-full"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>

                <label className="labelDef mt-14">Confirme sua Senha</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <Image src={Lock} alt="Lock Icon" width={20} height={20} />
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <Image src={Eyes} alt="Eye Icon" width={20} height={20} />
                    </div>
                    <input
                        type="password"
                        className="inputDef px-7 w-full"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </div>
            </form>
        </section>
    );
}

export default YourPsswrd;
