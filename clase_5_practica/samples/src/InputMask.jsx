function InputMask() {

  const handleKeyDown = (event) => {
    const tecla = event.key.toLowerCase();
    const vocales = ["a", "e", "i", "o", "u"];

    if (vocales.includes(tecla)) {
      event.preventDefault();
      alert("No se permiten vocales!");
    }
  }

  return (
    <>
      <h2>Input sin vocales</h2>
      <input type="text" onKeyDown={handleKeyDown} />
    </>
  )
}

export default InputMask