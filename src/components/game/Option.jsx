export default function Option({id, text, name})  {

  return (
    <>
      <input 
        type="radio"
        id={id}
        name={name}
      />
      <label htmlFor={id}>{text}</label>
    </>
  )
}