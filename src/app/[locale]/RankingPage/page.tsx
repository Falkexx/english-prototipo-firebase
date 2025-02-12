import PeriodSection from "./Components/PeriodSecion";
import UserRanking from "./Components/UsersRanking";
import BottomHeader from "../Home/Components/BottomHeader";
import IsAuthenticated from "@/services/IsAuthenticaded";
import Sidebar from "../Home/Components/Desktop/Sidebar/Sidebar";

async function page() {
  await IsAuthenticated();

  return (
    <>
      <section className="lg:flex lg:flex-row lg:w-full lg:m-auto lg:gap-8">
        <div className="hidden lg:block lg:w-[23%]">
          <Sidebar ActualPath="RankingPage" />
        </div>

        <BottomHeader ActualPath="RankingPage" />

        <main className="px-6 lg:px-6 lg:w-[80%] lg:h-[50vh] lg:mt-10">
          <PeriodSection />
          <UserRanking />
        </main>
      </section>
    </>
  );
}

export default page;
