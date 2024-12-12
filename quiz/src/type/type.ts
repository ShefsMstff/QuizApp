
export type Question = {
    question: string;
    answers: string[];
    correctAnswer: string;
  };
  

  export interface QuizProps<T> {
    data: T[];
  }
  