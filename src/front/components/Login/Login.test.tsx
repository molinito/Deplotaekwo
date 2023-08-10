import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  it('should render the login form', () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    const usuarioInput = getByPlaceholderText('Ingrese su usuario');
    const contrasenaInput = getByPlaceholderText('Ingrese su contraseña');
    const iniciarSesionButton = getByText('Iniciar sesión');
    const iniciarSesionConGoogleButton = getByText('Iniciar sesión con Google');

    expect(usuarioInput).toBeInTheDocument();
    expect(contrasenaInput).toBeInTheDocument();
    expect(iniciarSesionButton).toBeInTheDocument();
    expect(iniciarSesionConGoogleButton).toBeInTheDocument();
  });

  it('should update the state when inputs change', () => {
    const { getByPlaceholderText } = render(<Login />);
    const usuarioInput = getByPlaceholderText('Ingrese su usuario');
    const contrasenaInput = getByPlaceholderText('Ingrese su contraseña');

    fireEvent.change(usuarioInput, { target: { value: 'testuser' } });
    fireEvent.change(contrasenaInput, { target: { value: 'testpassword' } });

    expect(usuarioInput).toHaveValue('testuser');
    expect(contrasenaInput).toHaveValue('testpassword');
  });
});