import { useState } from 'react'

function App({onSubmit}) {

const [term, setTerm] = useState('')

const handleFormSubmit = (event) => {
  event.preventDefault()
  console.log('Necesito decirle al componente padre sobre los datos ')
  onSubmit(term)
}

const handleChange = (event) =>{
  console.log(event.target.value)
  setTerm(event.target.value)
}
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleChange} value={term}/>
      </form>
      <h1>Texto:</h1>
      <p>{term}</p>
    </div>
  )
}

export default App
