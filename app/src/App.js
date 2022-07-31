// react
import { useEffect, useState } from 'react'
// styles
import './App.css'
// components
import Button from './components/Button'
import FormBuscar from './components/FormBuscar'
import FormCrearNave from './components/FormCrearNave'
import ListOfResult from './components/ListOfResults'
// services
import getNaves from './services/getNaves'
import createNave from './services/createNave'

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
    if (arg !== false) {
      const resultsFiltered = naves.filter((e) => e.nombre.toLowerCase().includes(arg.toLowerCase()))
      setResults(resultsFiltered)
    } else {
      setResults(naves)
    }
  }
  const hhh = () => {
    setIsCreating(!isCreating)
  }
  const addNaveToDB = (data) => {
    createNave(data)
      .then((res) => {
        setNaves((actual) => [...actual, res])
        setResults((actual) => [...actual, res])
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <div className='App'>
      <header>
        <h1>Sofka Espacial</h1>
        <strong>cant: {results.length}</strong>
      </header>
      <div className='content'>
        <div className='content-forms'>
          <div className='content-form-buscar'>

            <FormBuscar handleBuscar={handleBuscar} />
            <br />
            <Button
              onClick={hhh}
            >
              {isCreating ? 'Cancelar' : 'Crear'}
            </Button>
            {
              isCreating &&
                <FormCrearNave
                  addNaveToDB={addNaveToDB}
                />
            }
          </div>
        </div>
        <div className='content-list-naves'>
          <ListOfResult results={results} />
        </div>
      </div>
    </div>
  )
}

export default App
