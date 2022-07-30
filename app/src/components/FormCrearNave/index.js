import { useState } from 'react'
import './formCrearNave.css'
function FormCrearNave () {
  const [nombre, setNombre] = useState('')
  const [peso, setPeso] = useState('')
  const [empuje, setEmpuje] = useState('')
  const [combustible, setCombustible] = useState('')
  const [velocidadMax, setVelocidadMax] = useState('')
  const [procedencia, setProcedencia] = useState('')

  return (
    <div className='form-crear-nave'>
      <h3>Crear Nave</h3>
      <form>
        <label>
          Nombre:
          <br />
          <input type='text' onChange={(e) => setNombre(e.target.value)} value={nombre} placeholder='Nombre de la nave' />
        </label>
        <label>
          Peso:
          <br />
          <input type='text' onChange={(e) => setPeso(e.target.value)} value={peso} placeholder='Peso de la nave' />
        </label>
        <label>
          Empuje:
          <br />
          <input type='text' onChange={(e) => setEmpuje(e.target.value)} value={empuje} placeholder='Empuje de la nave' />
        </label>
        <label>
          Combustible:
          <br />
          <input type='text' onChange={(e) => setCombustible(e.target.value)} value={combustible} placeholder='Combustible' />
        </label>
        <label>
          Velocidad Maxima:
          <br />
          <input type='text' onChange={(e) => setVelocidadMax(e.target.value)} value={velocidadMax} placeholder='Velocidad maxima' />
        </label>
        <label>
          Procedencia:
          <br />
          <input type='text' onChange={(e) => setProcedencia(e.target.value)} value={procedencia} placeholder='Procedencia de la nave' />
        </label>
      </form>
    </div>
  )
}

export default FormCrearNave
