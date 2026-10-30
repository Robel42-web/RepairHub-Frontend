import { useState } from 'react'
import './App.css'

function App() {
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [mostrarContrasena, setMostrarContrasena] = useState(false)
  const [mensaje, setMensaje] = useState('')

  
const manejarLogin = (e) => {
  e.preventDefault()

  if (!correo.trim() || !contrasena.trim()) {
    setMensaje('Por favor, completa todos los campos.')
    return
  }

  setMensaje(
    'Formulario validado correctamente. La autenticación estará disponible próximamente.'
  )
}


  return (
    <main>
      <h1>RepairHub</h1>
      <h2>Iniciar sesión</h2>

      <p>Bienvenido a nuestra plataforma de reparaciones.</p>

      <form onSubmit={manejarLogin}>
        <div>
          <label htmlFor="correo">Correo electrónico</label>
          <input
            id="correo"
            type="email"
            placeholder="ejemplo@correo.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>

        
<div>
  <label htmlFor="contrasena">Contraseña</label>

  <div className="password-container">
    <input
      id="contrasena"
      type={mostrarContrasena ? 'text' : 'password'}
      placeholder="Ingresa tu contraseña"
      value={contrasena}
      onChange={(e) => setContrasena(e.target.value)}
      required
    />

    <button
      type="button"
      className="toggle-password"
      onClick={() => setMostrarContrasena(!mostrarContrasena)}
      aria-label={
        mostrarContrasena ? 'Ocultar contraseña' : 'Mostrar contraseña'
      }
      aria-pressed={mostrarContrasena}
    >
      {mostrarContrasena ? 'Ocultar' : 'Mostrar'}
    </button>
  </div>
</div>


        <button type="submit">
          Iniciar sesión
        </button>
        {mensaje && (
  <p className="mensaje-login" role="status">
    {mensaje}
  </p>
)}
      </form>
    </main>
  )
}

export default App
