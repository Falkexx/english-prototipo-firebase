import Header from "@/app/LoggedHome/Components/Header";
import ChooseACard from '@/app/PaymentPage/Subscribe/PaymentMethod/components/ChooseACard'
import Btn_Continue from "./components/Btn_Continue";
function index() {
    return ( 

        <>
            <Header/>

            <main className="px-4 h-[calc(100vh-30vh)] flex flex-col justify-between">

                <ChooseACard/>
                <Btn_Continue/>

            </main>
        </>
     );
}

export default index;