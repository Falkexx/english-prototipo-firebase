type VerticalFillBoxExercise = {
  id: string;
  type: "verticalFillBox";
  title: string;
  questions: {
    question: string;
    correct_answer: string[];
  }[];
  suggestions: string[];
  correct_answer: string[];
};

export type AlternativesExercise = {
  id: string;
  type: "alternatives";
  title: string;
  title_audio_url?:string
  img_url:string
  description: string;
  isOnRecheck: boolean
  questions: {
    letter: string;
    question: string;
    question_audio_url: string;
  }[];
  correct_answer: string; // Letra da resposta correta
};

type FillboxWithOptionsExercise = {
  id: string;
  type: "fillboxWithOptions";
  title: string;
  description: string;
  image_url: string;
  audio_url: string;
  correct_answer: string[];
  questions: string[];
  difficulty: "EASY" | "MEDIUM" | "HARD";
  isPremium: boolean;
  created_at: string;
  updated_at: string;
  options: {
    img: string;
    value: string;
  }[];
};

type HorizontalFillBoxExercise = {
  id: string;
  type: "horizontalFillBox";
  title: string;
  description: string;
  img_url: string;
  question: string;
  suggestions: string[];
  correct_answer: string[];
  audio_url: string;
};

// Union type para todos os tipos de exercícios
type Exercise =
  | VerticalFillBoxExercise
  | AlternativesExercise
  | FillboxWithOptionsExercise
  | HorizontalFillBoxExercise;

// Tipo do array de exercícios
export type ExercisesArray = Exercise[];