import { useState } from "react";
import MainPage from "./MainPage";
import QuestionForm from "../game/QuestionForm";

export default function Main() {
  const [started, setStarted] = useState(false);

  return (
    <>
      { !started && <MainPage setStarted={setStarted} /> }
      { started && <QuestionForm /> }
    </>
  )
}