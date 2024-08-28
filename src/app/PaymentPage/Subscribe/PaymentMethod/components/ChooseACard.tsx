import Image from "next/image";
import PaypalIcon from '@/Midias/Icons/Paypal.svg'
import GooglePayIcon from '@/Midias/Icons/GooglePay.svg'
import PIXIcon from '@/Midias/Icons/PIX.png'
import CreditCard from '@/Midias/Icons/CreditCard.png'


function ChoseACard() {

    const Card = [

        {
            icon: PaypalIcon,
            instituition: 'PayPal'

        },
        {
            icon: GooglePayIcon,
            instituition: 'Google Pay'

        },
        {
            icon: PIXIcon,
            instituition: 'PIX'

        },
        {
            icon: CreditCard,
            instituition: 'Credit card'

        },

    ]
    return (

        <section>

            <article className="my-5">
                <h1 className="w-[100%] text-center text-zinc-800 text-xl font-extrabold font-['Nunito'] leading-loose">Escolha seu Método de Pagamento</h1>
            </article>

            <section className="flex flex-col gap-5 mt-5">

                {Card.map((e) => {

                    return (

                        <div key={e.instituition} className="w-full font-bold px-6 py-5 bg-white rounded-3xl border-2 border-zinc-100 justify-between items-center gap-4 inline-flex gap-2">

                            <div className="flex flex-row gap-2 items-center">
                                <Image alt='instituição imagem' src={e.icon} className="h-14 w-14" />
                                <h1 className="font-bold">{e.instituition}</h1>
                            </div>

                            <div>
                                <input type='radio' />

                            </div>

                        </div>
                    )
                })}
            </section>


        </section>

    );
}

export default ChoseACard;