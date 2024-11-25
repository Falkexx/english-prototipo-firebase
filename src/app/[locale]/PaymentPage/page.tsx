import Header from "../Home/Components/Header";
import PremiumDescription from "./components/PremiumDescription";
import ButtonsContainer from "./components/ButtonsContainer";
import BottomHeader from "../Home/Components/BottomHeader";
import IsAuthenticated from "@/services/IsAuthenticaded";

export default async function PaymentPage() {
  
  await IsAuthenticated();

  // Renderiza a página caso o usuário esteja autenticado
  return (
    <>
      <Header />
      <main className="px-4 h-[calc(100vh-24vh)] flex flex-col justify-between ">
        <PremiumDescription />
        <ButtonsContainer />
      </main>
      <BottomHeader ActualPath="Plans" />
    </>
  );
}
