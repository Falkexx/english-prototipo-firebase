import LeftDuck from '@/Midias/LeftDuck.svg'
import Image from 'next/image';

function SucessPayment() {
    return (

        <section>

            <section>
                <h1 className="text-center text-zinc-800 text-xl font-bold font-['Nunito'] leading-loose">Uhuuuuuul!</h1>
            </section>

            <div>
                <Image alt='Pato esquerdo' className="w-[356px] h-[269px] rounded-[40px] m-auto" src={LeftDuck} />
            </div>

            <article className='w-full flex items-center flex-col gap-2 my-4'>

                <h1 className="w-[359px] text-center text-[#f14968] text-2xl font-extrabold font-['Nunito'] leading-9">Pagamento Confirmado!</h1>



                <h2 className="w-[358px] text-center text-zinc-500 text-base font-medium font-['Nunito'] leading-normal">Parabéns! Você se inscreveu com sucesso no English Onboard por 3 meses. Vamos lembrá-lo antes que sua assinatura expire. Bons estudos!</h2>
            </article>

        </section>

    );
}

export default SucessPayment;