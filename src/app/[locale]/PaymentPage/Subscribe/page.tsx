import Header from "@/app/[locale]/Home/Components/Header";
import ChooseAPlan from "./components/ChooseAPlan";
import Btn_Continue from "./components/Btn_Continue";
import BottomHeader from "../../Home/Components/BottomHeader";
import IsAuthenticated from "@/services/IsAuthenticaded";
import Sidebar from "../../Home/Components/Desktop/Sidebar/Sidebar";

async function index() {
  await IsAuthenticated();

  return (
    <>
      <section className="lg:flex lg:flex-row lg:w-full lg:m-auto ">
        <div className="hidden lg:block lg:w-[23%]">
          <Sidebar ActualPath="Exams" />
        </div>

        <div className="lg:hidden">
          <Header />
        </div>

        <main className="px-4 flex flex-col justify-between lg:px-6 lg:w-[80%] lg:h-[50vh] lg:mt-10">
          <ChooseAPlan />
        </main>

        <BottomHeader ActualPath="Plans" />
      </section>
    </>
  );
}

export default index;
