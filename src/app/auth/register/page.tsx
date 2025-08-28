"use client"; // obligatorio porque usamos useState y eventos

import { useState } from "react";

export default function Page() {

    // Creamos un estado "form" que es un objeto con los campos del formulario.
// "setForm" nos permite actualizar ese estado. El hook useState guarda y reactualiza el valor de "form".

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

// handleChange se ejecuta cada vez que cambia un input. 
// Usa "e.target.name" para identificar qué campo del formulario se modificó y actualiza ese valor en el estado "form".
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


// handleSubmit maneja el envío del formulario de manera controlada con JS.
// Usamos preventDefault() para evitar que el navegador recargue la página automáticamente.

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // el if sierve para identificar si contraseña es igual a confirmar contraseña si no mandara una alerta 
    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Formulario listo para enviar:", form);
    // Aquí iría tu API de registro cuando la tengas
  };

  return (

<>
    <h1>Diligencie el siguente formulario para registrar su cuenta : </h1>


{/*} El formulario usa onSubmit para ejecutar nuestra función handleSubmit 
en lugar del comportamiento normal de HTML. Así controlamos qué pasa al enviar los datos.


 Input controlado: su valor proviene del estado "form" (form.email).
 Cuando el usuario escribe, onChange actualiza el estado con el nuevo valor.*/}

<form onSubmit={handleSubmit}>
   
  <label htmlFor="email">Correo</label>
  <input
    type="email"
    id="email"
    name="email"
    value={form.email}
    onChange={handleChange}
  />
<br /><br />
  <label htmlFor="password">Contraseña</label>
  <input
    type="password"
    id="password"
    name="password"
    value={form.password}
    onChange={handleChange}
  />
<br /><br />
  <label htmlFor="confirmPassword">Confirmar Contraseña</label>
  <input
    type="password"
    id="confirmPassword"
    name="confirmPassword"
    value={form.confirmPassword}
    onChange={handleChange}
  />
<br /><br />
  <button type="submit">Registrar</button>
</form>
</>
  )

}
