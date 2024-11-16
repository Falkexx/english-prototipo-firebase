import { Link } from "@/i18n/routing";

function ButtonsContainer() {
    return ( 

        <section className="w-full flex flex-row">
            <Link href='/Home' className='Btn_Secundary text-center'>Agora não</Link>
            <Link href='/PaymentPage/Subscribe' className="Btn_Primary text-center">Contratar</Link>
        </section>
    );
}

export default ButtonsContainer;