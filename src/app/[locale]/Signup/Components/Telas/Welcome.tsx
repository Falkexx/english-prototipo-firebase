import Image from "next/image";
import LeftDuck from '@/Midias/LeftDuck.svg'

function BemVindo() {
    return (<>

        <section className="flex flex-col gap-5">

            <article className="w-full text-center border-2 rounded-3xl py-5 px-4">
                <span className="leading-normal font-extrabold text-xl text-zinc-700">Bem-vindo(a) a <span className="text-text-secundary font-extrabold">English Onboard!</span> Antes das lições, vamos cadastrar o seu perfil para personalizar a sua experiência de aprendizado.</span>
            </article>

            <section className="mt-10">
                <Image src={LeftDuck} alt="Patinho" priority quality={100}/>
            </section>

        </section>


    </>);
}

export default BemVindo;