
import React from "react";
import Quiz from "./components/Quiz";
import { quizData } from "./components/Quiz/data";


const App: React.FC = () => {
  return (
    <div>
      <Quiz data={quizData} />
    </div>
  );
};

export default App;
