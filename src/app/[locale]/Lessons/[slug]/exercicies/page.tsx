"use client";

import { useState, useEffect } from "react";
import { ExercisesArray } from "@/Types/exercisies";
import { useParams } from "next/navigation";
import { db } from "@/Server/FirebaseDb";
import { doc, updateDoc, arrayUnion, getDoc, setDoc } from "firebase/firestore";
import GetUserDatas from "@/services/GetUserDatas";
import { useQuery } from "react-query";
import { parseCookies } from "nookies";

import ExerciciesProgressBar from "../../components/ExerciciesProgressBar";
import VerticalFillbox from "../../components/exerciciesComponents/VerticalFillbox";
import CorrectAnswer from "../../components/exerciciesComponents/CorrectAnswer";
import WrongAnswer from "../../components/exerciciesComponents/WrongAnswer";
import Alternatives from "../../components/exerciciesComponents/Alternatives";
import FillboxWithOptions from "../../components/exerciciesComponents/FillboxWithOptions";
import HorizontalFillbox from "../../components/exerciciesComponents/HorizontalFillbox";
import ShowStatisticsComponent from "../../components/exerciciesComponents/ShowStatistics";
import { exercicies } from "@/services/Mocked_Datas/Exercicies";

function Page() {
  const params = useParams();
  const slug = params.slug; // Pegando o slug da URL

  const token = ""; // Defina seu token de autenticação, se necessário

  const {
    data: userData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: () => GetUserDatas(token!),
    staleTime: 1000 * 60 * 5, // Cache por 5 minutos
  });

  // Filtrar os exercícios com base no chapter_id igual ao slug
  const filteredExercises = exercicies.filter(
    (exercise) => exercise.chapter_id === slug
  );


  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0); // Índice do exercício atual
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false); // Controle do componente de resposta correta
  const [showWrongAnswer, setShowWrongAnswer] = useState(false); // Controle do componente de resposta errada
  const [showStatistics, setShowStatistics] = useState(false); // Controle para mostrar estatísticas

  // Exercício atual com base no índice dentro dos exercícios filtrados
  const currentExercise = filteredExercises[currentExerciseIndex];

  if (isLoading) return "Carregando dados...";
  if (error) return `Erro: ${error}`;

  const handleNextExercise = async () => {
    setShowCorrectAnswer(false); // Reseta o estado de resposta correta
    setShowWrongAnswer(false); // Reseta o estado de resposta errada

    if (currentExerciseIndex === filteredExercises.length - 1) {
      // Se estiver no último exercício filtrado, mostra as estatísticas
      setShowStatistics(true);

      // Recuperar o moduleId dos cookies
      const cookies = parseCookies();
      const moduleId = cookies.moduleId;

      if (userData) {
        try {
          const userRef = doc(db, "users", userData.id); // Referência do usuário
          await updateDoc(userRef, {
            chapters_done: arrayUnion({ slug, moduleId }), // Adiciona slug e moduleId
          });
        } catch (error) {
          console.error("Erro ao atualizar o Firestore:", error);
        }
      }
    } else {
      // Avança para o próximo exercício dentro dos filtrados
      setCurrentExerciseIndex((prev) =>
        Math.min(prev + 1, filteredExercises.length - 1)
      );
    }
  };

  const handleRetryExercise = () => {
    setShowWrongAnswer(false); // Fecha o componente de resposta errada
  };

  const handleCheckAnswers = (isCorrect: boolean) => {
    if (isCorrect) {
      setShowWrongAnswer(false);
      setShowCorrectAnswer(true);
      window.scrollTo(0, 0);
    } else {
      setShowCorrectAnswer(false);
      setShowWrongAnswer(false);
      setTimeout(() => setShowWrongAnswer(true), 50);
    }
  };

  return (
    <section className="px-4 py-4 relative">
      {/* Mostra as estatísticas se for o momento */}
      {showStatistics ? (
        <ShowStatisticsComponent />
      ) : filteredExercises.length > 0 ? (
        <>
          {/* Barra de progresso */}
          <ExerciciesProgressBar
            LessonsAmount={filteredExercises.length} // Usa o tamanho dos exercícios filtrados
            currentLesson={currentExerciseIndex + 1} // Exercício atual
          />

          {/* Renderiza o exercício atual */}
          {currentExercise?.type === "verticalFillBox" && (
            <VerticalFillbox
              title={currentExercise.title}
              questions={currentExercise.questions}
              suggestions={currentExercise.suggestions}
              onCheckAnswers={(answers) =>
                handleCheckAnswers(
                  JSON.stringify(answers) ===
                    JSON.stringify(currentExercise.correct_answer)
                )
              }
            />
          )}

          {currentExercise?.type === "alternatives" && (
            <Alternatives
              title={currentExercise.title}
              description={currentExercise.description}
              questions={currentExercise.questions}
              correctAnswer={currentExercise.correct_answer}
              onCheckAnswers={handleCheckAnswers}
              isOnRecheck={currentExercise.isOnRecheck}
              img_url={currentExercise.img_url}
              title_audio_url={currentExercise.title_audio_url || ""}
              question_audio_url={
                currentExercise.questions[0]?.question_audio_url || ""
              }
            />
          )}

          {currentExercise?.type === "fillboxWithOptions" && (
            <FillboxWithOptions
              title={currentExercise.title}
              description={currentExercise.description}
              questions={currentExercise.questions}
              options={currentExercise.options}
              correctAnswer={currentExercise.correct_answer}
              onCheckAnswers={handleCheckAnswers}
            />
          )}

          {currentExercise?.type === "horizontalFillBox" && (
            <HorizontalFillbox
              title={currentExercise.title}
              question={currentExercise.question}
              suggestions={currentExercise.suggestions}
              imgUrl={currentExercise.img_url}
              audioUrl={currentExercise.audio_url}
              onCheckAnswers={(answers) =>
                handleCheckAnswers(
                  JSON.stringify(answers) ===
                    JSON.stringify(currentExercise.correct_answer)
                )
              }
            />
          )}

          {/* Mostra o componente de resposta correta */}
          {showCorrectAnswer && (
            <CorrectAnswer onNextExercise={handleNextExercise} />
          )}

          {/* Mostra o componente de resposta errada */}
          {showWrongAnswer && (
            <WrongAnswer onRetryLesson={handleRetryExercise} />
          )}
        </>
      ) : (
        <div>No exercises found for this chapter.</div>
      )}
    </section>
  );
}

export default Page;