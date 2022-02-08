export default function MainPage({setStarted}) {
  return (
    <div className="main fc-center">
      <div className="main__container fc-center">
        <section className="main__container__content">
          <h1>Quizzical</h1>
        </section>
        <button className="main__container__button" onClick={() => setStarted(true)}>
          Start Quiz
        </button> 
      </div>
    </div>
  )
}