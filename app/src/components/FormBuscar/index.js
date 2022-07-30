import { useState } from 'react'

function FormBuscar ({ handleBuscar }) {
  const [buscar, setBuscar] = useState('')
  const handleChange = (e) => {
    const { value } = e.target
    setBuscar(value)
    handleBuscar(value)
    if (value === '') {
      handleBuscar(false)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // if (buscar) {
    //   handleBuscar(buscar)
    // } else {
    //   handleBuscar(false)
    // }
  }
  return (
    <>
      <h2>Buscar Nave</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={buscar}
          onChange={handleChange}
          placeholder='ingrese termino a buscar'
        />
        <button>Buscar</button>
      </form>
    </>
  )
}

export default FormBuscar
