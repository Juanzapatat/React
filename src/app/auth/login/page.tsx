import React from 'react'

export default function login() {
  return (
    <>

 <label htmlFor="">Usuario</label>     
<input type="text" name='correo' id='correo' required />

<br />

 <label htmlFor="">Contraseña</label>     
<input type="password" name='contraseña' id='contraseña' required />


    </>
  )
}
