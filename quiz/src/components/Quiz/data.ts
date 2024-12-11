export type Question={
    question:string;
    answers:string[];
    correctAnswer:string;
};
export const quizData:Question[]=[
    {
        question:"What is the capital of France?",
        answers:["Berlin","Madrid","Paris","Lisbon"],
        correctAnswer:"Paris"
    },
    {
        question:"Which language runs in a web browser?",
         answers:["Java","C","Python","Js"],
        correctAnswer:"Js"
    },
    {
        question:"What does CSS stand for?",
        answers:["Central S S","Cascading Style Sheets","Cascading Simple S","Cars S S"],
        correctAnswer:"Cascading Style Sheets"
    },
];