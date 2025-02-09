"use client";

import { useState, useEffect } from "react";
import Alternatives from "../../Lessons/components/exerciciesComponents/Alternatives";
import Header from "../components/Header";
import { exercicies } from "./exercicies";
import ShowStatisticsComponent from "@/app/[locale]/Lessons/components/exerciciesComponents/ShowStatistics";
import Conclusion from "@/app/[locale]/Recheck/components/Conclusion/index";

function Page() {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [showStatistics, setShowStatistics] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([]);

  const currentExercise = exercicies[currentExerciseIndex];

  // Inicia o cronômetro
  useEffect(() => {
    if (showStatistics) return;  // Não inicia o timer se estamos na tela de conclusão
    
    const interval = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Limpa o intervalo quando a tela de conclusão for mostrada ou ao sair do componente
  }, [currentExerciseIndex, showStatistics]);  // Executa sempre que a questão ou o status de conclusão mudam

  const handleCheckAnswers = (isCorrect: boolean) => {
    const questionNumber = currentExerciseIndex + 1; // Ajusta o número da questão para começar em 1

    // Atualizando as respostas corretas e incorretas imediatamente
    if (isCorrect) {
      setCorrectAnswers((prev) => [...prev, questionNumber]);
    } else {
      setWrongAnswers((prev) => [...prev, questionNumber]);
    }

    // Atualizando o tempo total
    setTotalTime((prev) => prev + timeElapsed);
  
    // Reseta o tempo após cada resposta
    setTimeElapsed(0);

    // Verificando se o exercício atual é o último
    if (currentExerciseIndex === exercicies.length - 1) {
      // Exibir estatísticas após a última questão ser respondida
      setShowStatistics(true);

      // Exibir o alerta com as respostas corretas e incorretas

    } else {
      // Avançar para a próxima questão
      setCurrentExerciseIndex((prev) => prev + 1);
    }
  };

  // Função para formatar o tempo total
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  // Calcular a acurácia
  const accuracy = correctAnswers.length / (correctAnswers.length + wrongAnswers.length) * 100;

  return (
    <section className="px-4 py-4 relative">
      {/* Exibe o Header apenas se não estiver mostrando as estatísticas */}
      {!showStatistics && (
        <Header path="on_exercises" currentTime={timeElapsed} currentTask={currentExerciseIndex + 1} />
      )}

{showStatistics ? (
  <Conclusion
    totalTime={totalTime + timeElapsed}  // Tempo total em segundos
    accuracy={accuracy}  // Acurácia
    correct_answers={correctAnswers}  // Respostas corretas
    wrong_answers={wrongAnswers}  // Respostas erradas
  />
) : (
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

    </section>
  );
}

export default Page;
