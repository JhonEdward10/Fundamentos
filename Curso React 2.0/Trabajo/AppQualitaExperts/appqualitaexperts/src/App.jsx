import { useState } from 'react'
import Login from './components/Login';
import './App.css'

function App() {

 // Estado para manejar el usuario logueado
  const [user, setUser] = useState(null);

  // Función que se ejecuta cuando el login es exitoso
  const handleLogin = (userData) => {
    setUser(userData); // Guarda los datos del usuario
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    setUser(null); // Borra los datos del usuario
  };

  // Si no hay usuario logueado, mostrar Login
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  // Si hay usuario logueado, mostrar Dashboard
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Barra de navegación */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Panel Principal</h1>
          <button 
            onClick={handleLogout}
            className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800"
          >
            Cerrar Sesión
          </button>
        </div>
      </nav>
      
      {/* Contenido principal */}
      <div className="p-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">¡Bienvenido!</h2>
          <p><strong>Nombre:</strong> {user.fullName}</p>
          <p><strong>Usuario:</strong> {user.username}</p>
          <p><strong>Rol:</strong> {user.role}</p>
        </div>
      </div>
    </div>
  );
}

export default App
