function Button({ children, handleClickFunc = null }) {
  const className = children.toLowerCase().replace(" ", "-");
  const handleClick = () => {
    if (handleClickFunc) handleClickFunc();
  };
  return (
    <button className={`button button--${className}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
