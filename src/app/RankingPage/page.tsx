import HeaderRanking from "@/Components/HeaderRanking";
import PeriodSection from './Components/PeriodSecion'
import UserRanking from './Components/UsersRanking'
import BottomHeader from "../Home/Components/BottomHeader";

function page() {
    return (

        <>
            <BottomHeader ActualPath="RankingPage"/>

            <main className="px-6">

                <PeriodSection/>
                <UserRanking/>

            </main>
        </>
    );
}

export default page;