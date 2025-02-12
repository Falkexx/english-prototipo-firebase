import Header from "@/app/[locale]/Home/Components/Header";
import ChooseACard from "@/app/[locale]/PaymentPage/Subscribe/PaymentMethod/components/ChooseACard";
import Btn_Continue from "./components/Btn_Continue";
import BottomHeader from "@/app/[locale]/Home/Components/BottomHeader";
import IsAuthenticated from "@/services/IsAuthenticaded";
import Sidebar from "@/app/[locale]/Home/Components/Desktop/Sidebar/Sidebar";
async function index() {
  await IsAuthenticated();
  return (
    <>
      <section className="lg:flex lg:flex-row lg:w-full lg:m-auto ">
        <div className="hidden lg:block lg:w-[23%]">
          <Sidebar ActualPath="Plans" />
        </div>

        <Header />

        <main className="px-4 h-[calc(100vh-30vh)]  flex flex-col justify-between lg:h-[50vh] lg:px-6 lg:w-[80%] lg:mt-10">
          <ChooseACard />
        </main>

        <BottomHeader ActualPath="Plans" />
      </section>
    </>
  );
}

export default index;
