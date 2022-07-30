import CardNave from '../CardNave'
function ListOfResult ({ results }) {
  // console.log(results)
  return (
    <>
      {results.map(({ _id, nombre, peso, empuje, tipo, combustible, velocidadMax, procedencia }) => (
        <CardNave
          key={_id}
          id={_id}
          nombre={nombre}
          tipo={tipo}
          peso={peso}
          empuje={empuje}
          combustible={combustible}
          velocidadMax={velocidadMax}
          procedencia={procedencia}
        />
      ))}
    </>
  )
}

export default ListOfResult
