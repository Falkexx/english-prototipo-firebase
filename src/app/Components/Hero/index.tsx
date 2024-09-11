import Image from "next/image";
import MascoteHome from '@/Midias/MascoteHome.svg'
function index() {
    return (

        <section className="w-full flex flex-col gap-3 justify-center items-center">
            <Image src={MascoteHome} alt="Mascote" className="w-full mb-6"/>

            <div className="text-center">
                <span className="text-2xl font-extrabold text-zinc-700">Decole o seu nível de Inglês embarcando na tripulação da English Onboard</span>
            </div>
        </section>
    );
}

export default index;