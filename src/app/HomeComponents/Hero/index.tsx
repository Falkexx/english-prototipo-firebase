import Image from "next/image";
import MascoteHome from '@/Midias/MascoteHome.svg'
function index() {
    return (

        <section className="w-full flex flex-col gap-3 justify-center items-center">
            <Image src={MascoteHome} alt="Mascote" className="w-full "/>

            <div>
                <h1 className="mainTitle">Decole o seu nível de Inglês embarcando na tripulação da English Onboard</h1>
            </div>
        </section>
    );
}

export default index;