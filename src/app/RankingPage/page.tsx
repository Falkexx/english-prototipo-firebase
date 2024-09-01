import HeaderRanking from "@/Components/HeaderRanking";
import PeriodSection from './Components/PeriodSecion'
import UserRanking from './Components/UsersRanking'

function page() {
    return (

        <>
            <HeaderRanking/>

            <main className="px-6">

                <PeriodSection/>
                <UserRanking/>

            </main>
        </>
    );
}

export default page;