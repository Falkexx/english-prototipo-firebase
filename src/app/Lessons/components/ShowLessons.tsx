"use client";
import { useState, useEffect } from "react";

interface Lesson {
  id: string;
  name: string;
  image_url: string;
  audio_url: string;
  answer: string;
  correct_answer: string;
  suggestions: string;
  difficulty: string;
  isPremium: boolean;
  created_at: string;
  updated_at: string;
}

async function fetchLessons(): Promise<Lesson[]> {
  const response = await fetch(
    "http://localhost:3000/lessons/many?take=100&skip=0"
  );
  const data = await response.json();
  return data;
}

function ShowLessons({
  updateProgress,
}: {
  updateProgress: (progress: number) => void;
}) {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [availableSuggestions, setAvailableSuggestions] = useState<{
    [key: string]: string[];
  }>({});
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number>(0);

  useEffect(() => {
    const getLessons = async () => {
      const lessonsData = await fetchLessons();
      setLessons(lessonsData);

      const initialSuggestions = lessonsData.reduce(
        (acc, lesson) => ({
          ...acc,
          [lesson.id]: lesson.suggestions.split(";").map((s) => s.trim()),
        }),
        {}
      );
      setAvailableSuggestions(initialSuggestions);
    };

    getLessons();
  }, []);

  useEffect(() => {
    if (lessons.length > 0) {
      updateProgress((completedLessons / lessons.length) * 100);
    }
  }, [completedLessons, lessons, updateProgress]);

  const handleSuggestionClick = (lessonId: string, suggestion: string) => {
    const nextEmptyIndex = findNextEmptyIndex(lessonId);

    if (nextEmptyIndex) {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [`${lessonId}-${nextEmptyIndex}`]: suggestion,
      }));

      setAvailableSuggestions((prevSuggestions) => {
        const updatedSuggestions = prevSuggestions[lessonId].filter(
          (s) => s !== suggestion
        );
        return { ...prevSuggestions, [lessonId]: updatedSuggestions };
      });
    }
  };

  const handleSpanClick = (lessonId: string, index: string) => {
    const inputValue = inputs[`${lessonId}-${index}`];
    if (inputValue) {
      setAvailableSuggestions((prevSuggestions) => ({
        ...prevSuggestions,
        [lessonId]: [...prevSuggestions[lessonId], inputValue],
      }));

      setInputs((prevInputs) => ({
        ...prevInputs,
        [`${lessonId}-${index}`]: "",
      }));
    }
  };

  const findNextEmptyIndex = (lessonId: string) => {
    // Encontra o próximo campo vazio
    const answerParts = lessons[currentLessonIndex].answer.match(/\$\d/g);
    if (!answerParts) return null;

    for (const part of answerParts) {
      const index = part.replace("$", "");
      if (!inputs[`${lessonId}-${index}`]) {
        return index;
      }
    }
    return null;
  };

  const checkAnswer = (lesson: Lesson) => {
    const filledAnswer = lesson.answer
      .replace(/\$1/g, inputs[`${lesson.id}-1`] || "")
      .replace(/\$2/g, inputs[`${lesson.id}-2`] || "");

    if (filledAnswer === lesson.correct_answer) {
      alert("Resposta correta!");
      setCompletedLessons((prev) => prev + 1);
      setCurrentLessonIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("Resposta incorreta. Tente novamente!");
    }
  };

  if (lessons.length === 0) {
    return <div>Carregando lições...</div>;
  }

  return (
    <section className="h-[90vh]">
      {currentLessonIndex < lessons.length ? (
        <section key={lessons[currentLessonIndex].id} className="mb-6 h-[80%] flex flex-col justify-between">
          <section className="h-[50%] flex flex-col justify-between items-center ">
            <h1 className="text-zinc-800 text-lg font-bold font-['Nunito'] leading-7">
              {lessons[currentLessonIndex].name}
            </h1>
            <img
              src={lessons[currentLessonIndex].image_url}
              alt={lessons[currentLessonIndex].name}
              className="w-[100%] h-[217px] rounded-[10px] border-2 border-[#f14968]"
            />

            <div className="self-end justify-self-end">
              <p className="text-zinc-700 text-xl font-extrabold font-['Nunito'] leading-loose">
                {lessons[currentLessonIndex].answer
                  .split(/(\$\d)/)
                  .map((part, index) => {
                    if (/\$\d/.test(part)) {
                      const placeholderIndex = part.replace("$", "");
                      return (
                        <span
                          key={index}
                          onClick={() =>
                            handleSpanClick(
                              lessons[currentLessonIndex].id,
                              placeholderIndex
                            )
                          }
                          className="bg-zinc-100 text-base rounded-[10px] border border-zinc-200 cursor-pointer mx-2"
                          style={{
                            width: "60px",
                            display: "inline-block",
                            textAlign: "center",
                          }}
                        >
                          {inputs[
                            `${lessons[currentLessonIndex].id}-${placeholderIndex}`
                          ] || ""}
                        </span>
                      );
                    }
                    return part;
                  })}
              </p>
            </div>
          </section>

          <section className="h-[50%]  flex flex-col  justify-end">

            <div>
              <div className="flex gap-2 mt-2">
                {availableSuggestions[lessons[currentLessonIndex].id]?.map(
                  (suggestion, index) => (
                    <div
                      key={index}
                      className="h-10 px-4 py-2 bg-zinc-100 rounded-[10px] border border-zinc-200 justify-center items-center gap-2 inline-flex text-zinc-700 text-base font-bold font-['Nunito'] leading-normal"
                      onClick={() =>
                        handleSuggestionClick(
                          lessons[currentLessonIndex].id,
                          suggestion.trim()
                        )
                      }
                    >
                      {suggestion.trim()}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={() => checkAnswer(lessons[currentLessonIndex])}
                className="Btn_Primary "
              >
                Verificar resposta
              </button>
            </div>
          </section>
        </section>
      ) : (
        <div>Você concluiu todas as lições!</div>
      )}
    </section>
  );
}

export default ShowLessons;
