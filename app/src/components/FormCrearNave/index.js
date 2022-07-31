import { useState } from 'react'
import Button from '../Button'
import FormTipoLanzadera from '../FormTipoLanzadera'
import FormTipoNoTripulada from '../FormTipoNoTripulada'
import FormTipoTripulada from '../FormTipoTripulada'
import './formCrearNave.css'
const TIPO_NAVE = ['lanzadera', 'tripulada', 'noTripulada']
function FormCrearNave () {
  const [nombre, setNombre] = useState('')
  const [peso, setPeso] = useState('')
  const [empuje, setEmpuje] = useState('')
  const [combustible, setCombustible] = useState('')
  const [velocidadMax, setVelocidadMax] = useState('')
  const [procedencia, setProcedencia] = useState('')
  const [tipo, setTipo] = useState('')
  // estados nave lanzadera
  const [capCarga, setCapCarga] = useState('')
  const [cantPropulsores, setCantPropulsores] = useState('')
  // estados nave tripulada
  const [capPasajeros, setCapPasajeros] = useState('')
  // // estados nave no tripulada
  const [altitud, setAltitud] = useState('')
  const [puedeAterrizar, setPuedeAterrizar] = useState('')

  const newEntryBase = {
    nombre,
    peso,
    empuje,
    combustible,
    velocidadMax,
    procedencia,
    tipo
  }
  const newEntryLanzadera = {
    ...newEntryBase,
    capCarga,
    cantPropulsores
  }
  const newEntryTripulada = {
    ...newEntryBase,
    capPasajeros
  }
  const newEntryNoTripulada = {
    ...newEntryBase,
    altitud,
    puedeAterrizar
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    switch (tipo) {
      case 'lanzadera':
        console.log(newEntryLanzadera)
        break
      case 'tripulada':
        console.log(newEntryTripulada)
        break
      case 'noTripulada':
        console.log(newEntryNoTripulada)
        break
      default:
        break
    }
  }
  // const handleAyuda = () => {

  // }
  return (
    <div className='form-crear-nave'>
      <h3>Crear Nave</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <br />
          <input type='text' required onChange={(e) => setNombre(e.target.value)} value={nombre} placeholder='Nombre de la nave' />
        </label>
        <label>
          Peso:
          <br />
          <input type='number' required onChange={(e) => setPeso(e.target.value)} value={peso} placeholder='Peso de la nave' />
        </label>
        <label>
          Empuje:
          <br />
          <input type='number' required onChange={(e) => setEmpuje(e.target.value)} value={empuje} placeholder='Empuje de la nave' />
        </label>
        <label>
          Combustible:
          <br />
          <input type='text' required onChange={(e) => setCombustible(e.target.value)} value={combustible} placeholder='Combustible' />
        </label>
        <label>
          Velocidad Maxima:
          <br />
          <input type='number' required onChange={(e) => setVelocidadMax(e.target.value)} value={velocidadMax} placeholder='Velocidad maxima' />
        </label>
        <label>
          Procedencia:
          <br />
          <input type='text' required onChange={(e) => setProcedencia(e.target.value)} value={procedencia} placeholder='Procedencia de la nave' />
        </label>
        {/* <br /> */}
        <label>
          tipo:
          <br />
          {/* selector para definir tipo de nave */}
          <select defaultValue='' onChange={(e) => setTipo(e.target.value)}>
            <option defaultChecked value=''>seleccione un tipo</option>
            {
              TIPO_NAVE.map((e) => (
                <option key={e} value={e}>{e}</option>
              ))
            }
          </select>
        </label>

        {
          tipo === 'lanzadera' &&
            <FormTipoLanzadera
              setCapCarga={setCapCarga}
              setCantPropulsores={setCantPropulsores}
              carga={capCarga}
              propulsores={cantPropulsores}
            />
        }
        {
          tipo === 'tripulada' &&
            <FormTipoTripulada
              setCapPasajeros={setCapPasajeros}
              capPasajeros={capPasajeros}
            />
        }
        {
          tipo === 'noTripulada' &&
            <FormTipoNoTripulada
              altitud={altitud}
              setAltitud={setAltitud}
              setPuedeAterrizar={setPuedeAterrizar}
            />
        }
        <Button disabled>Crear Nave</Button>
        {/* <button disabled={!tipo}>hoho</button> */}
      </form>
    </div>
  )
}

export default FormCrearNave
