function FormTipoNoTripulada ({ altitud, setAltitud, setPuedeAterrizar }) {
  const handleAltitud = (e) => {
    setAltitud(e.target.value)
  }
  const handleAterrizar = (e) => {
    setPuedeAterrizar(Boolean(+e.target.value))
  }
  return (
    <>
      <label>
        Altitud:
        <br />
        <input
          required
          type='number'
          value={altitud}
          onChange={handleAltitud}
        />
      </label>
      <label>
        puedeAterrizar:
        <select onChange={handleAterrizar}>
          <option value={1}>si</option>
          <option value={0}>no</option>
        </select>
      </label>

    </>
  )
}

export default FormTipoNoTripulada
