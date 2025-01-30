"use client";

import { useState } from "react";
import { ExercisesArray } from "@/Types/exercisies";
import ExerciciesProgressBar from "../../components/ExerciciesProgressBar";
import VerticalFillbox from "../../components/exerciciesComponents/VerticalFillbox";
import CorrectAnswer from "../../components/exerciciesComponents/CorrectAnswer";
import WrongAnswer from "../../components/exerciciesComponents/WrongAnswer";
import Alternatives from "../../components/exerciciesComponents/Alternatives";
import FillboxWithOptions from "../../components/exerciciesComponents/FillboxWithOptions";
import HorizontalFillbox from "../../components/exerciciesComponents/HorizontalFillbox";
import ShowStatisticsComponent from "../../components/exerciciesComponents/ShowStatistics";

function Page() {
  
  const exercicies:ExercisesArray = [
    {
      id: "1",
      type: "verticalFillBox",
      title: "Match the Job Titles",
      questions: [
        {
          question: "Helps Passengers on the Plane",
          correct_answer: ["Flight Deck Crew"],
        },
        { question: "Leads the Cabin Team", correct_answer: ["Chief Purser"] },
        { question: "Flies the Plane", correct_answer: ["Captain"] },
        { question: "Works in the Cockpit", correct_answer: ["Ground Staff"] },
        { question: "Works at the Airport", correct_answer: ["Cabin Crew"] },
      ],
      suggestions: [
        "Flight Deck Crew",
        "Chief Purser",
        "Captain",
        "Ground Staff",
        "Cabin Crew",
      ],
      correct_answer: [
        "Flight Deck Crew",
        "Chief Purser",
        "Captain",
        "Ground Staff",
        "Cabin Crew",
      ],
    },
    {
      id: "2",
      type: "alternatives",
      title: "Who Does What?",
      description: "Who leads the pre-flight briefing?",
      questions: [
        { letter: "A", question: "Chief Purser" },
        { letter: "B", question: "Captain" },
        { letter: "C", question: "Ground Staff" },
        { letter: "D", question: "Gallery Operator" },
        { letter: "E", question: "Aircraft Engineer" },
      ],
      correct_answer: "B", // Resposta correta
    },
    {
      id: "nrILaRYUczlbk9cJqJ1r",
      type: "fillboxWithOptions",
      description: "Match the emojis with words",
      title: "Weather Condition",
      image_url: "http://domain/image.png",
      audio_url: "http://domain/image.png",
      correct_answer: ["sun", "turbulence", "cloudy", "rainy", "stormy"],
      questions: ["Turbulence", "Clear Weather", "Cloudy", "Rainy", "Stormy"],
      difficulty: "HARD",
      isPremium: true,
      created_at: "2024-11-24T21:21:04.006Z",
      updated_at: "2024-11-24T21:21:04.006Z",
      options: [
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/sun.png",
          value: "sun",
        },
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/wind-face.png",
          value: "turbulence",
        },
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/cloud.png",
          value: "cloudy",
        },
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/umbrella-with-rain-drops.png",
          value: "rainy",
        },
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/high-voltage.png",
          value: "stormy",
        },
      ],
    },
    {
      id: "1",
      type: "horizontalFillBox",
      title: "Weather Report",
      description: "Complete with: good, bad, clear, cloudy, rainy",
      img_url:
        "https://i.ibb.co/2nLngFG/with-luggage-aircraft-crew-work-uniform-is-together-outdoors-near-plane-1.png",
      question:
        "Today's weather is $ at departure and $ at arrival. The sky is $ now but will be $ later. We expect $ conditions during flight.",
      suggestions: ["Sunny", "Good", "Clear", "Cloudy", "Rainy"],
      correct_answer: ["Sunny", "Good", "Clear", "Cloudy", "Rainy"],
      audio_url: "http://domain/image.png",
    },

    {
      id: "nrILaRYUczlbk9cJqJ1r",
      type: "fillboxWithOptions",
      description: "Number these actions 1-5",
      title: "Put in order",
      image_url: "http://domain/image.png",
      audio_url: "http://domain/image.png",
      correct_answer: ["1", "2", "3", "4", "5"],
      questions: [
        "Check safety equipment",
        "Attend briefing",
        "Welcome passengers",
        "Put on uniform",
        "Report for duty",
      ],
      difficulty: "HARD",
      isPremium: true,
      created_at: "2024-11-24T21:21:04.006Z",
      updated_at: "2024-11-24T21:21:04.006Z",
      options: [
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/keycap-1.png",
          value: "1",
        },
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/keycap-2.png",
          value: "2",
        },
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/keycap-3.png",
          value: "3",
        },
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/keycap-4.png",
          value: "4",
        },
        {
          img: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/keycap-5.png",
          value: "5",
        },
      ],
    },
  ];

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0); // Índice do exercício atual
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false); // Controle do componente de resposta correta
  const [showWrongAnswer, setShowWrongAnswer] = useState(false); // Controle do componente de resposta errada
  const [showStatistics, setShowStatistics] = useState(false); // Controle para mostrar estatísticas

  const currentExercise = exercicies[currentExerciseIndex];

  const handleNextExercise = () => {
    setShowCorrectAnswer(false); // Reseta o estado de resposta correta
    setShowWrongAnswer(false); // Reseta o estado de resposta errada

    if (currentExerciseIndex === exercicies.length - 1) {
      // Se estiver no último exercício, mostra as estatísticas
      setShowStatistics(true);
    } else {
      // Caso contrário, avança para o próximo exercício
      setCurrentExerciseIndex((prev) =>
        Math.min(prev + 1, exercicies.length - 1)
      );
    }
  };

  const handleRetryExercise = () => {
    setShowWrongAnswer(false); // Fecha o componente de resposta errada
  };

  const handleCheckAnswers = (isCorrect: boolean) => {
    if (isCorrect) {
      setShowWrongAnswer(false); // Garante que o componente errado está oculto
      setShowCorrectAnswer(true); // Mostra o componente de resposta correta
    } else {
      setShowCorrectAnswer(false); // Garante que o componente correto está oculto
      setShowWrongAnswer(false); // Reinicia o estado antes de exibir novamente
      setTimeout(() => setShowWrongAnswer(true), 50); // Reexibe o componente
    }
  };

  return (
    <section className="px-4 py-4 relative">
      {/* Mostra as estatísticas se for o momento */}
      {showStatistics ? (
        <ShowStatisticsComponent />
      ) : (
        <>
          {/* Barra de progresso */}
          <ExerciciesProgressBar
            LessonsAmount={exercicies.length}
            currentLesson={currentExerciseIndex + 1} // Passa o exercício atual
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
              onCheckAnswers={handleCheckAnswers} // Valida respostas no tipo alternatives
            />
          )}

          {currentExercise?.type === "fillboxWithOptions" && (
            <FillboxWithOptions
              title={currentExercise.title}
              description={currentExercise.description}
              questions={currentExercise.questions}
              options={currentExercise.options}
              correctAnswer={currentExercise.correct_answer}
              onCheckAnswers={handleCheckAnswers} // Passa diretamente o handleCheckAnswers
            />
          )}

          {currentExercise?.type === "horizontalFillBox" && (
            <HorizontalFillbox
              title={currentExercise.title}
              question={currentExercise.question}
              suggestions={currentExercise.suggestions}
              imgUrl={currentExercise.img_url} // Passa a imagem
              audioUrl={currentExercise.audio_url} // Passa o áudio
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
      )}
    </section>
  );
}

export default Page;
