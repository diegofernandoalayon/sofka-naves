import { useEffect, useState } from 'react'
import './App.css'
import FormBuscar from './components/FormBuscar'
import ListOfResult from './components/ListOfResults'
import getNaves from './services/getNaves'

function App () {
  const [naves, setNaves] = useState([])
  const [results, setResults] = useState([])
  const [isCreating, setIsCreating] = useState(false)

  useEffect(() => {
    getNaves()
      .then((naves) => {
        setNaves(naves)
        setResults(naves)
      })
      .catch((err) => console.error(err))
  }, [])
  const handleBuscar = (arg) => {
    console.log(arg)
    if (arg !== false) {
      const resultsFiltered = naves.filter((e) => e.nombre.includes(arg))
      setResults(resultsFiltered)
    } else {
      setResults(naves)
    }
  }
  const hhh = () => {
    setIsCreating(!isCreating)
  }
  return (
    <div className='App'>
      <h1>Sofka Espacial</h1>
      <div className='content'>
        <div>
          <FormBuscar handleBuscar={handleBuscar} />

          <button
            onClick={hhh}
          >
            {isCreating ? 'Cancelar' : 'Crear'}
          </button>
          {
            isCreating && 'form'
          }
        </div>
        <div className='content-list-naves'>
          <ListOfResult results={results} />
        </div>
      </div>
    </div>
  )
}

export default App
