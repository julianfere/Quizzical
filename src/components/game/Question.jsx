import Option from "./Option"
import { decode } from "html-entities"
import { useState } from "react"

export default function Question({question, answers, question_id, ready}) {

  const gKey = (question_id, answer_index) => `${question_id}_${answer_index}`

  const [selected, setSelected] = useState(answers.map(
    (_, index) => { return { 'id': gKey(question_id, index), 'selected': false } }
  ))

  const getSelected = (index) => selected.find(item => item.id == gKey(question_id, index))

  return (
    <section className="question">
      <h1 className="question__title">{decode(question)}</h1>
      <section className="option__container">
        {answers.map(
          (answer, index) => <Option key={index} id={gKey(question_id,index)} name={question_id} correct={answer.correct}  text={decode(answer.answer)} state={getSelected(index)} select={setSelected} ready={ready} />
          )
        }
      </section>
      <hr />
    </section>
  )
}