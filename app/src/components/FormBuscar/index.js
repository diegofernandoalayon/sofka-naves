import { useState } from 'react'

function FormBuscar () {
  const [buscar, setBuscar] = useState('')
  const handleChange = (e) => {
    console.log(e.target)
    setBuscar(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <h2>Buscar Nave</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' value={buscar} onChange={handleChange} />
        <button>Buscar</button>
      </form>
    </>
  )
}

export default FormBuscar
