import React, { useState } from 'react';
import { quizData } from './data';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (answer: string) => {
    if (answer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div>
        <h1>Quiz End!</h1>
        <p>Netice: {score} of {quizData.length}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Quiz</h1>
      <p>{quizData[currentQuestion].question}</p>
      <div>
        {quizData[currentQuestion].answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
