import React, { useState } from "react";
import { Stack } from "@mui/material";
import LoginForm from "./components/LoginForm"; // Asegúrate de que la ruta sea correcta

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el email
    return regex.test(email) && email.length >= 5;
  };

  const validatePassword = (password: string): boolean => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return password.length >= 8 && hasUpperCase && hasNumber;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Por favor, introduce un correo electrónico válido.");
      return;
    }
    if (!validatePassword(password)) {
      setError("La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.");
      return;
    }
    setError("");
    // Lógica para enviar los datos...
  };

  return (
    <Stack
      sx={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f8',
      }}
    >
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        error={error}
        handleSubmit={handleSubmit}
      />
    </Stack>
  );
};

export default Login;
