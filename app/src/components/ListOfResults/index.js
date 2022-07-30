import CardNave from '../CardNave'
function ListOfResult ({ results }) {
  console.log(results)
  return (
    <>
      {results.map(({ id, nombre, tipo }) => (
        <CardNave
          key={id}
          id={id}
          nombre={nombre}
          tipo={tipo}
        />
      ))}
    </>
  )
}

export default ListOfResult
