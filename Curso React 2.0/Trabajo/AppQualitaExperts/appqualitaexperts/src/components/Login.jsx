import { useState } from "react";
import React from "react";

//Recibe una función del componente padre (App.jsx) que se ejecutará cuando el login sea exitoso
const Login = ({ onLogin }) => {
    const [username, setUsername] = useState(''); //Guarda lo que el usuario escribe en el campo "Usuario"
    const [password, setPassword] = useState(''); // Guarda lo que el usuario escribe en el campo "Contraseña"
    const [error, setError] = useState(''); //Guarda mensajes de error, ej:"usuario incorrecto"
    const [loading, setLoading] = useState(false); //Indica si está procesando el login true o false



//Credenciales validas
const validCredentials = [
    { username: "admin", password: "123", role: "administrador", fullName: "German munoz"},
    { username: "user1", password: "321", role: "usuario", fullName: "Jhon mendez"}
];

const handleLogin = () => {
    setLoading(true);           // Mostrar "cargando..."
    setError('');               // Limpiar errores anteriores

    setTimeout(() => {
        const user = validCredentials.find(
            credential => credential.username === username && credential.password === password
        );

        if(user){
            onLogin(user); // Si encuentra usuario, ejecuta función del padre
        }else {
            setError("Usuario no encontrado, usuario o contraseña incorrectos"); //sino, muestra error
        }
        setLoading(false)
    }, 1000)
};

return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Iniciar Sesión
            </h2>
            <div className="space-y-4">

                {/* Inicio de Sesion */}

                <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                Usuario:
                </label>
                <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Ingrese su usuario"
                />
                </div>

                {/* Contraseña */}

                <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                Contraseña:
                </label>
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Ingrese su contraseña"
                />
                </div>
                
                {/* Error */}
                {error && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                </div>
                )}

                {/* Boton */}

                <button
                    onClick={handleLogin}
                    disabled={loading || !username || !password}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50"
                >
                    {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </button>


                {/* Prueba */}

                <div className="mt-6 p-3 bg-gray-100 rounded text-sm">
                    <p className="font-semibold">Credenciales de prueba:</p>
                    <p>Usuario: <code>admin</code> - Contraseña: <code>123</code></p>
                </div>  
            </div>
        </div>
    </div>
)
};

export default Login;