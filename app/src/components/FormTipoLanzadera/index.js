
function FormTipoLanzadera ({ capCarga, cantPropulsores, setCantPropulsores, setCapCarga }) {
  const handleCarga = (e) => {
    setCapCarga(e.target.value)
  }
  const handlePropulsores = (e) => {
    setCantPropulsores(e.target.value)
  }
  return (
    <>
      <label>
        Capacidad carga:
        <br />
        <input
          type='number'
          required
          onChange={handleCarga}
          value={capCarga}
        />
        {capCarga}
      </label>
      <br />
      <label>
        Cantidad propulsores:
        <br />
        <input
          type='number'
          required
          onChange={handlePropulsores}
          value={cantPropulsores}
        />
      </label>
    </>
  )
}

export default FormTipoLanzadera
