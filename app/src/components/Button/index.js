import './button.css'
function Button ({ onClick, children }) {
  return (
    <button className='button-custom' onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
