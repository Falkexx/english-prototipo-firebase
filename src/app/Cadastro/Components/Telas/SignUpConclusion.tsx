import LeftDuck from '@/Midias/LeftDuck.svg'
import Image from "next/image";

function SignUpConclusion() {

    return (
        <div className="w-full">


            <main className="w-full flex flex-col gap-4">

                <div className="p-5 rounded-3xl border-2 border-zinc-200 justify-center items-center gap-2 inline-flex">
                    <h1 className="grow shrink basis-0 text-center text-zinc-800 text-xl font-bold font-['Nunito'] leading-loose">Bem-vindo a bordo!</h1>
                </div>


                <Image src={LeftDuck} alt='Patinho' />

                <article className="flex flex-col gap-2">

                    <h1 className="grow shrink basis-0 text-center text-bg-primary text-3xl font-bold font-['Nunito'] leading-loose">Tudo pronto!</h1>

                    <p className="grow shrink basis-0 text-center text-[#71717A] text-base font-['Nunito'] leading-loose">Vamos começar sua jornada de aprendizado!</p>
                </article>




            </main>
        </div>
    );
}

export default SignUpConclusion;