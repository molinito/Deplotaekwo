import React from 'react';
import styles from './login.module.css';

const Login = () => {
	return (
		<div class={styles['center']}>
			<h1>Iniciar sesión</h1>
			<form method="post">
				<div class={styles['txt_field']}>
					<input type="text" required />
					<span></span>
					<label>Usuario</label>
				</div>
				<div class={styles['txt_field']}>
					<input type="password" required />
					<span></span>
					<label>Contraseña</label>
				</div>
				<div class={styles['pass']}>Olvidaste tu contraseña?</div>
				<input type="submit" value="Iniciar sesión" />
				<div class={styles['signup_link']}>
					¿Aún no tienes cuenta? <a href="#">Registrarse</a>
				</div>
			</form>
		</div>
	);
};

export default Login;
