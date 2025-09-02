import React from 'react'
import ComponentCard from '../components/ComponentCard'



export default function page() {
  return (
  <div className="dashboard-container">
      <h1 className="dashboard-title">Gestión de Reservas</h1>
      <div className="cards-grid">
        <ComponentCard titulo="Reservar Cancha" ruta="/reservar" />
        <ComponentCard titulo="Mirar Reserva" ruta="/mirar-reserva" />
        <ComponentCard titulo="Eliminar Reserva" ruta="/eliminar-reserva" />
      </div>
    </div>
  )
}
