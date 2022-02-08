export default async () => {
  let data = await fetch("https://opentdb.com/api.php?amount=5")
  data = await data.json()
  data.results.forEach((question) => {
    question.all_answers = question.incorrect_answers.map( awnser => { return { "answer": awnser, "correct": false } } )
                                                     .concat({ answer: question.correct_answer, correct: true })
  })

  return data.results
}