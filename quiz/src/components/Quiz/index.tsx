
import React, { useState } from "react";
import { Question, QuizProps } from "../../type/type";

const Quiz: React.FC<QuizProps<Question>> = ({ data }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (answer: string) => {
    if (answer === data[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion < data.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="box">
        <h1>Quiz End!</h1>
        <p>Result: {score} of {data.length}</p>
      </div>
    );
  }

  return (
    <div className="box">
      <h1>Quiz</h1>
      <p>{data[currentQuestion].question}</p>
      <div>
        {data[currentQuestion].answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
