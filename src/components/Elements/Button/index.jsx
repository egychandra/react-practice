const Button = (props) => {
  const { children, classname, onClick = () => {}, type = "button" } = props;

  return (
    <button
      className={`${classname} text-white font-bold py-2 px-4 rounded`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;