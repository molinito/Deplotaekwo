import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';

const Login: React.FC = () => {
    const { loginWithRedirect } = useAuth0();
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleUsuarioChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUsuario(event.target.value);
    };

    const handleContrasenaChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setContrasena(event.target.value);
    };

    return (
        <div className="login">
            <div className="container">
            <img className="logo-tae-1" src="/tae-1.png" />
            <div className="rectangle-42">
                <input
                    type="password"
                    className="rectangle-422"
                    placeholder=""
                    value={contrasena}
                    onChange={handleContrasenaChange}
                />
            </div>
            
            <div className="rectangle-41">
                <input
                    type="text"
                    className="rectangle-412"
                    placeholder=""
                    value={usuario}
                    onChange={handleUsuarioChange}
                />
            </div>
            <div className="inicio-de-sesion">Inicio de sesión</div>
            <div className="usuario">Usuario</div>
            <div className="contrasena">Contraseña</div>
            <div className="group-31">
                <div className="rectangle-37"></div>
                <button type="submit" className="iniciar-sesion">
                    Iniciar sesión
                </button>
            </div>
            <svg
                className="line-2"
                width="343"
                height="2"
                viewBox="0 0 343 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 0L343 1.03313" stroke="white" strokeWidth="2" />
            </svg>
            <svg
                className="line-3"
                width="343"
                height="2"
                viewBox="0 0 343 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 0L343 1.03313" stroke="white" strokeWidth="2" />
            </svg>
            <div className="o">o</div>
            <div className="component-2">
                <div className="rectangle-40"></div>
                <button
                    type="submit"
                    onClick={() => loginWithRedirect()}
                    className="iniciar-sesion-con-google"
                >
                    Iniciar sesión con Google
                </button>
            </div>
        </div>
        </div>
    );
};

export default Login;
