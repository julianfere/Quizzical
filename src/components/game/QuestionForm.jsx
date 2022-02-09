import { useEffect, useState } from "react";
import Question from "./Question";
import fetchQuestions from "../../api/getQuestions";

export default function QuestionForm() {
  const [ready, setReady] = useState(false)
  const [questions, setQuestions] = useState([])
    
  const getQuestions = async () => {
    let data = await fetchQuestions();
    setQuestions(data)
  }

  useEffect(() => getQuestions(), [])

  return (
    <main className="main fc-center">
      <section className="question__container">
        {questions.map(
          (question, index) => <Question key={index} question_id={`question_${index}`} question={question.question} answers={question.all_answers} ready={ready} />
          )
        }
      </section>
      <br />
      {!ready && <button className="main__container__button" onClick={() => setReady(true)}>Check answers</button>}
      {ready && <button className="main__container__button" onClick={() => setReady(false)}>play again</button>}
    </main>
  )
}
