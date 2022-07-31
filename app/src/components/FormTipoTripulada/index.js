function FormTipoTripulada ({ capPasajeros, setCapPasajeros }) {
  const handlePasajeros = (e) => {
    setCapPasajeros(e.target.value)
  }
  return (
    <>
      <label>
        capacidad de pasajeros:
        <br />
        <input
          type='number'
          value={capPasajeros}
          onChange={handlePasajeros}
        />
      </label>
    </>
  )
}

export default FormTipoTripulada
