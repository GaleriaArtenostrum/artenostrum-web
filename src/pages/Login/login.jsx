import React from 'react';
import { useLogin } from './useLogin';
import LoginView from './LoginView';

const Login = () => {
  const logic = useLogin(); // Obtenemos la lógica
  return <LoginView {...logic} />; // Se la pasamos a la vista
};

export default Login;