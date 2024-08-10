import Image from "next/image";
import Mail from "@/Midias/mail.png";

function YourEmail({ Nome }: { Nome: string }) {
    return (
        <section className="flex flex-col gap-8 mt-6">
            <h1 className="text-zinc-800 text-xl font-bold font-['Nunito'] leading-loose">
                Obrigado, {Nome}! Agora, qual é o seu endereço de email?
            </h1>

            <form className="flex flex-col gap-2">
                <label className="labelDef">Seu Email</label>

                <div className="relative">
                    {/* Ícone do Mail */}
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <Image src={Mail} alt="Mail Icon" width={20} height={20} />
                    </div>

                    {/* Input Field */}
                    <input
                        type="text"
                        className="inputDef pl-7 w-full" 
                    />
                </div>
            </form>
        </section>
    );
}

export default YourEmail;
