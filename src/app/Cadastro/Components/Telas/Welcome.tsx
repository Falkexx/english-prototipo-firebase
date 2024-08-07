import Image from "next/image";
import LeftDuck from '@/Midias/LeftDuck.svg'

function BemVindo() {
    return (<>

        <section className="flex flex-col gap-5">

            <article className="w-full text-center">
                <h1 className="leading-normal font-bold">Bem-vindo(a) a <span className="text-text-secundary font-bold line">English Onboard!</span> Antes das lições, vamos cadastrar o seu perfil para personalizar a sua experiência de aprendizado.</h1>
            </article>

            <section>
                <Image src={LeftDuck} alt="Patinho"/>
            </section>

        </section>


    </>);
}

export default BemVindo;