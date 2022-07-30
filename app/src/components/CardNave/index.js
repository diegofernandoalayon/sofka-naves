function CardNave ({ id, nombre, tipo }) {
  console.log(id)
  return (
    <div onClick={() => console.log(id)}>
      <h3>{nombre}</h3>
      <p>{tipo}</p>
    </div>
  )
}

export default CardNave
