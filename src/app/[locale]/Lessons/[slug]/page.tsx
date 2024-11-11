"use client";

import { useState, useEffect } from "react";
import Header from "@/app/[locale]/Lessons/components/Header";
import ShowLessons from "../components/ShowLessons";
import { useRouter } from 'next/navigation';
import CorrectAnswer from '@/app/[locale]/Lessons/components/CorrectAnswer'
import {Link} from '@/i18n/routing';

// Exemplo de lições hardcoded
const exampleLessons = [
  {
    id: "1",
    name: "Lição 1: Frutas",
    image_url: "https://assets.ype.ind.br/uploads/frutas_da_estacao_ypedia-scaled-1698513255.jpg",
    audio_url: "https://example.com/audio/frutas.mp3",
    answer: "Eu gosto de $1 e $2.",
    correct_answer: "Eu gosto de maçã e banana.",
    suggestions: "maçã;banana;laranja;manga",
    difficulty: "fácil",
    isPremium: false,
    created_at: "2023-01-01",
    updated_at: "2023-01-02",
  },
  {
    id: "2",
    name: "Lição 2: Cores",
    image_url: "https://www.colegioicj.com.br/wp-content/uploads/2021/04/psicologia-das-cores-1280x800.jpg",
    audio_url: "https://example.com/audio/cores.mp3",
    answer: "O céu é $1 e a grama é $2.",
    correct_answer: "O céu é azul e a grama é verde.",
    suggestions: "azul;verde;vermelho;amarelo",
    difficulty: "médio",
    isPremium: true,
    created_at: "2023-01-03",
    updated_at: "2023-01-04",
  },
  {
    id: "3",
    name: "Lição 3: Animais",
    image_url: "https://s2-umsoplaneta.glbimg.com/1037GcVAUfXt1bF4bSZCXjN5Fh4=/0x0:4459x2973/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_7d5b9b5029304d27b7ef8a7f28b4d70f/internal_photos/bs/2021/0/R/TuzrYcQfArntKSDr4h6g/gettyimages-533801804.jpg",
    audio_url: "https://example.com/audio/animais.mp3",
    answer: "O $1 mia e o $2 late.",
    correct_answer: "O gato mia e o cachorro late.",
    suggestions: "gato;cachorro;pássaro;coelho",
    difficulty: "difícil",
    isPremium: false,
    created_at: "2023-01-05",
    updated_at: "2023-01-06",
  },
];

function Page() {
  const [progress, setProgress] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // Novo estado para verificar se está no lado do cliente
  const router = useRouter();

  useEffect(() => {
    // Verifica se o componente está montado no lado do cliente
    setIsMounted(true);
  }, []);

  const updateProgress = (progress: number) => {
    setProgress(progress);
  };

  const handleBackClick = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex((prevIndex) => prevIndex - 1);
      setProgress(((currentLessonIndex - 1) / exampleLessons.length) * 100); // Atualiza o progresso ao voltar
    } else if (isMounted) {
      // Somente redireciona se o componente estiver montado no lado do cliente
      router.push("/Home"); // Redireciona para a página home
    }
  };

  return (
    <section className="p-4 flex flex-col gap-3">
      <Header
        ProgressBarStatus={currentLessonIndex + 1} // Atualiza o Header com a lição atual
        BackFunction={handleBackClick} // Função de voltar
        totalSteps={exampleLessons.length} // Número total de lições
      />

      <main>
        <ShowLessons
          updateProgress={updateProgress}
          lessons={exampleLessons} // Passando as lições como props
          currentLessonIndex={currentLessonIndex} // Passa o índice atual da lição
          setCurrentLessonIndex={setCurrentLessonIndex} // Função para mudar o índice da lição
        />

      </main>
    </section>
  );
}

export default Page;
