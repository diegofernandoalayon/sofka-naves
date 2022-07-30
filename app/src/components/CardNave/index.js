import './cardNave.css'
function CardNave ({ _id, nombre, peso, empuje, tipo, combustible, velocidadMax, procedencia }) {
  return (
    <div className='card-nave' onClick={() => console.log(_id)}>
      <h3>{nombre}</h3>
      <p><strong>nave de tipo: </strong>{tipo}</p>
      <p><strong>peso: </strong>{peso}</p>
      <p>con {empuje} de empuje</p>
      <p>usa {combustible} como combustible</p>
      <p>alcanza una velocidad de {velocidadMax} km/h</p>
      <p><strong>procedente de: </strong>{procedencia}</p>

    </div>
  )
}

export default CardNave
