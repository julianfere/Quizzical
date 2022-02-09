export default function Option({id, text, name, state, select, ready, correct})  {

  const setSelected = () => {
    select( (prevState) => {
      prevState.forEach(item => item.selected = false)
      state.selected = !state.selected
      return [...prevState]
    })
  }

  let klass

  if (ready) {
    if (correct) 
      klass = 'correct'
    if (!correct && state.selected)
      klass = 'incorrect'
  }

  
  return (
    <>
      <input 
        type="radio"
        id={id}
        name={name}
        checked={state.selected}
        onChange={setSelected}
        disabled={ready ? correct : false}
      />
      <label htmlFor={id} className={klass}>{text}</label>
    </>
  )
}