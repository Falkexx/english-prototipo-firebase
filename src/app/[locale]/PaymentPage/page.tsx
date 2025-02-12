import Header from "../Home/Components/Header";
import PremiumDescription from "./components/PremiumDescription";
import ButtonsContainer from "./components/ButtonsContainer";
import BottomHeader from "../Home/Components/BottomHeader";
import IsAuthenticated from "@/services/IsAuthenticaded";
import Sidebar from "../Home/Components/Desktop/Sidebar/Sidebar";

export default async function PaymentPage() {
  await IsAuthenticated();

  // Renderiza a página caso o usuário esteja autenticado
  return (
    <>
      <section className="lg:flex lg:flex-row lg:w-full lg:m-auto ">
        <div className="hidden lg:block lg:w-[23%]">
          <Sidebar ActualPath="Plans" />
        </div>

        <div className="lg:hidden">
          <Header />
        </div>

        <main className="px-4  flex flex-col justify-between lg:px-6 lg:w-[80%] lg:h-[50vh] lg:mt-10">
          <PremiumDescription />

          <div className="mt-12">
            <ButtonsContainer />
          </div>
        </main>
        <BottomHeader ActualPath="Plans" />
      </section>
    </>
  );
}
