import Header from "../Home/Components/Header";
import PremiumDescription from "./components/PremiumDescription";
import ButtonsContainer from './components/ButtonsContainer'

function PaymentPage() {
    return (

        <>
            <Header />
            <main className="px-4 h-[calc(100vh-24vh)] flex flex-col justify-between ">
                <PremiumDescription />
                <ButtonsContainer />
            </main>

        </>
    );
}

export default PaymentPage;