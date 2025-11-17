import './index.css'
import { useMemo, useState } from "react";

function FormField({ label, type = "text", value, onChange }) {
  return (
    <div className='form-field'>
      <label className='form-label'>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  )
};

export default function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  function handleInputChange(setter) {
    return (event) => setter(event.target.value);
  }

  const isFormValid = useMemo(() => {
    return name.trim() && surname.trim() && age.trim();
  }, [name, surname, age])

  function handleSubmit() {
    const cleanName = name.trim();
    const cleanSurname = surname.trim();
    const cleanAge = age.trim();

    console.log(`Your name is ${cleanName} ${cleanSurname} and you have ${cleanAge} years`);

    setName(cleanName);
    setSurname(cleanSurname);
    setAge(cleanAge);
  }

  return (
    <div>
      <h1>Ingresa tus datos para completar la compra 🛍</h1>
      <FormField
        label="Nombre"
        value={name}
        onChange={handleInputChange(setName)}
      />

      <FormField
        label="Apellido"
        value={surname}
        onChange={handleInputChange(setSurname)}
      />

      <FormField
        label="Edad"
        value={age}
        onChange={handleInputChange(setAge)}
      />

      <button
        disabled={!isFormValid}
        onClick={handleSubmit}
        className='submit-button'
      >
        Crear orden
      </button>
    </div>
  );
}