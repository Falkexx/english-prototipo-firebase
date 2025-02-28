"use client";

import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/routing";
import ShowIntroduction from "../components/ShowIntroduction";
import { Chapters } from "../../../../services/Mocked_Datas/Chapters";
import GetUserDatas from "@/services/GetUserDatas";
import { useQuery } from "react-query";
import Loading from "@/Components/LoadingHome";
import { db } from "@/Server/FirebaseDb"; // Importando Firestore
import { doc, getDoc } from "firebase/firestore";

interface IntroductionProps {
  id: string;
  description: string;
  imgUrl: string;
  lessonId: string;
  audioUrl: string;
}

interface UserData {
  id: string; // UID do usuário
  chapters_done: { slug: string }[];
}

function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { slug } = params;

  const token = "user-auth-token"; // 🔹 Substitua com sua lógica de autenticação

  // 🔹 Pegando dados do usuário
  const { data: userData, isLoading } = useQuery(["userData"], () =>
    GetUserDatas(token)
  );

  const [userPlan, setUserPlan] = useState<string | null>(null);
  const [checkingPlan, setCheckingPlan] = useState(true);

  // 🔹 Verificando o plano do usuário no Firestore
  useEffect(() => {
    const fetchUserPlan = async () => {
      if (userData?.id) {
        try {
          const userRef = doc(db, "users", userData.id);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setUserPlan(userSnap.data().plan);
          } else {
            console.error("Usuário não encontrado no Firestore");
          }
        } catch (error) {
          console.error("Erro ao buscar plano do usuário:", error);
        } finally {
          setCheckingPlan(false);
        }
      }
    };

    fetchUserPlan();
  }, [userData?.id]);

  // 🔹 Verificando se o capítulo é Premium
  const isChapterPremium = Chapters.some(
    (chapter) => chapter.is_Premium && chapter.id === slug
  );

  // 🔹 Verificando se o capítulo já foi feito pelo usuário
  const isChapterCompleted = userData?.chapters_done?.some(
    (chapter) => chapter.slug === slug
  );

  // 🔹 Redirecionando para Home **apenas** se:
  // 1️⃣ Plano for "free" e capítulo for Premium
  // 2️⃣ Capítulo já tiver sido concluído pelo usuário
  useEffect(() => {
    if (
      (!checkingPlan && userPlan === "free" && isChapterPremium) ||
      isChapterCompleted
    ) {
      router.push("/Home");
    }
  }, [userPlan, checkingPlan, isChapterPremium, isChapterCompleted, router]);

  if (isLoading || checkingPlan) return "carregando";

  const chapterIntroduction: IntroductionProps = {
    id: "1",
    description:
      "The Pre-Flight Briefing is an essential meeting conducted by the Chief Purser and the Captain before every flight...",
    imgUrl:
      "https://i.ibb.co/2nLngFG/with-luggage-aircraft-crew-work-uniform-is-together-outdoors-near-plane-1.png",
    lessonId: slug,
    audioUrl:
      "https://firebasestorage.googleapis.com/v0/b/englishboard-c566e.appspot.com/o/audios%2Fluvvoice.com-20250208-wE6JTH.mp3?alt=media&token=72062b61-fa94-4b98-b957-3c2dbb897ea6",
  };

  return (
    <section className="px-4">
      <ShowIntroduction data={chapterIntroduction} />
    </section>
  );
}

export default Page;
