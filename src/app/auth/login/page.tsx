
// Una carpeta de autenticacion donde contendra degamos infromacion del usuario como login, registros ,exitCode..., sub carpeta de login para implementar una page donde tendra la información completa del login.

import React from 'react'

export default function login() {
  return (
    
    // recomendado devolver un fragmento no un div

    <>   

 <label htmlFor="">Usuario</label>     
<input type="text" name='correo' id='correo' required />

<br />

 <label htmlFor="">Contraseña</label>     
<input type="password" name='contraseña' id='contraseña' required />

 <button type="submit">Iniciar Sesión</button>

    </>
  )
}
