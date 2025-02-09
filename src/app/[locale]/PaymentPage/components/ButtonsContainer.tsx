import { Link } from "@/i18n/routing";

function ButtonsContainer() {
    return ( 

        <section className="w-full flex flex-row">
            <Link href='/Home' className='Btn_Secundary text-center'>Apenas Re-Check</Link>
            <Link href='/PaymentPage/Subscribe' className="Btn_Primary text-center">Premium</Link>
        </section>
    );
}

export default ButtonsContainer;