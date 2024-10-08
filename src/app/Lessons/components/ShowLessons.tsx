import { useEffect, useState } from "react";
import CorrectAnswer from "@/app/Lessons/components/CorrectAnswer";
import WrongAnswer from "@/app/Lessons/components/WrongAnswer";

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

interface ShowLessonsProps {
  updateProgress: (progress: number) => void;
  lessons: Lesson[];
  currentLessonIndex: number;
  setCurrentLessonIndex: (index: number) => void;
}

function ShowLessons({
  updateProgress,
  lessons = [],
  currentLessonIndex,
  setCurrentLessonIndex,
}: ShowLessonsProps) {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [availableSuggestions, setAvailableSuggestions] = useState<{
    [key: string]: string[];
  }>({});
  const [completedLessons, setCompletedLessons] = useState<number>(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);
  const [incorrectLessons, setIncorrectLessons] = useState<Lesson[]>([]); // Estado para lições erradas

  useEffect(() => {
    if (lessons.length > 0) {
      updateProgress((completedLessons / lessons.length) * 100);

      const initialSuggestions = lessons.reduce(
        (acc, lesson) => ({
          ...acc,
          [lesson.id]: lesson.suggestions.split(";").map((s) => s.trim()),
        }),
        {}
      );
      setAvailableSuggestions(initialSuggestions);
    }
  }, [lessons, completedLessons, updateProgress]);

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
      setAvailableSuggestions((prevSuggestions) => {
        // Verifica se a sugestão já existe antes de adicioná-la
        if (!prevSuggestions[lessonId].includes(inputValue)) {
          return {
            ...prevSuggestions,
            [lessonId]: [...prevSuggestions[lessonId], inputValue],
          };
        }
        return prevSuggestions;
      });

      // Limpa o input
      setInputs((prevInputs) => ({
        ...prevInputs,
        [`${lessonId}-${index}`]: "",
      }));
    }
  };

  const findNextEmptyIndex = (lessonId: string) => {
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
      setIsAnswerCorrect(true);
      setCompletedLessons((prev) => prev + 1); // Incrementa apenas se a resposta estiver correta
    } else {
      setIsAnswerWrong(true);
      setIncorrectLessons((prev) => [...prev, lesson]); // Armazena a lição errada
    }
  };

  const handleNextExercise = () => {
    setIsAnswerCorrect(false);
    // Avança para a próxima lição
    setCurrentLessonIndex(currentLessonIndex + 1); // Atualize diretamente com o novo valor
  };
  const handleRetryLesson = () => {
    setIsAnswerWrong(false);
    setCurrentLessonIndex(currentLessonIndex + 1); // Atualize diretamente com o novo valor
    // Reintroduz a lição errada para o final da lista
    if (incorrectLessons.length > 0) {
      const nextIncorrect = incorrectLessons[0];
      setIncorrectLessons((prev) => prev.slice(1));
      lessons.push(nextIncorrect); // Adiciona a lição errada ao final
    }
  };

  if (lessons.length === 0) {
    return <div>Carregando lições...</div>;
  }

  return (
    <section className="h-[90vh]">
      {currentLessonIndex < lessons.length ? (
        <section
          key={lessons[currentLessonIndex].id}
          className="mb-6 h-[80%] flex flex-col justify-between"
        >
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

          <section className="h-[50%] flex flex-col justify-end">
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

      {isAnswerCorrect && <CorrectAnswer onNextExercise={handleNextExercise} />}
      {isAnswerWrong && <WrongAnswer onRetryLesson={handleRetryLesson} />}
    </section>
  );
}

export default ShowLessons;
