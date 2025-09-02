
  // Una carpeta de autenticacion donde contendra degamos infromacion del usuario como login, registros ,exitCode..., sub carpeta de login para implementar una page donde tendra la información completa del login.

  "use client" 
  import React from 'react'
  import { useRouter } from "next/navigation"

  export default function login() {

    const router =useRouter();
    return (
      
      // recomendado devolver un fragmento no un div

  <div className="dashboard-container">
      <h1 className="dashboard-title">Iniciar Sesión</h1>
      <div className="component-card" style={{ maxWidth: 400 }}>
        <label htmlFor="correo">Usuario</label>
        <input type="text" name='correo' id='correo' required style={{ marginBottom: '1rem', width: '100%' }} />

        <label htmlFor="contraseña">Contraseña</label>
        <input type="password" name='contraseña' id='contraseña' required style={{ marginBottom: '2rem', width: '100%' }} />

        <button
          type="button"
          className="component-card"
          style={{ background: '#6366f1', color: '#fff', marginTop: '1rem', border: 'none', borderRadius: '1rem', padding: '0.75rem', cursor: 'pointer' }}
          onClick={() => router.push('/dashboard')}
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
    )
  }
