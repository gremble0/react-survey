import { useState } from "react";
import Header from "./components/Header";
import Survey from "./components/Survey";
import "./App.css";

export default function App() {
  const [answers, setAnswers] = useState([{
    color: 4,
    spendTime: "Swimming",
    whatElse: "Not much",
    name: "Dave Ames",
    email: "dave@example.com",
  }]);

  return (
    <>
      <Header />
      <Survey
        answers={answers}
        setAnswers={setAnswers}
      />
    </>
  );
}
