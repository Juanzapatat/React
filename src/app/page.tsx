"use client"; // obligatorio en componentes con hooks si vpoy a redirecionar a otra page, ejemplo de esta al login 

import React from 'react';
import ComponentOne from './components/ComponentOne';
import { useRouter } from 'next/navigation';  //Este sirve para el redireccionamiento 
//Necesario realizar las importaciones de componentes o pages a utilizar

export default function Page() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/auth/login'); //  Esto va a /app/auth/login/page.tsx
  };

  const handleRegisterClick = () => {
    router.push('/auth/register'); //  Esto va a /app/auth/login/page.tsx
  };

  return (
    <div>
      <h1>Mi primer pagina react</h1>
      {<ComponentOne />    /*llamo a un componente por su nombre*/}
      <button onClick={handleLoginClick}>Ir a Login</button> {/*redireccionamiento al Login */}
      <button onClick={handleRegisterClick}>Registar Cuenta</button>
    </div>
    // crea codigo js para interacturar con el hook y poder redireccionar 
  );
}