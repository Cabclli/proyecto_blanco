import React, { useState } from "react";
import {
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular básica para validar el email
    return regex.test(email) && email.length >= 5;
  };

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return password.length >= 8 && hasUpperCase && hasNumber;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("El correo electrónico no es válido.");
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
      <Stack
        sx={{
          maxWidth: "500px",
          padding: "30px",
          bgcolor: "#285b99",
          borderRadius: "15px",
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" color="#fff" textAlign="center" marginBottom={2}>
          Ingresa a tu cuenta
        </Typography>
        {error && <Typography color="#fff" textAlign="center" marginBottom={2}>{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              style: { borderRadius: '10px', color: '#fff' },
            }}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
          />
          <TextField
            id="password"
            label="Contraseña"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              style: { borderRadius: '10px', color: '#fff' },
            }}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
          />
          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
              color: "#fff",
              bgcolor: "#007bff",
              "&:hover": { bgcolor: "#0056b3" },
            }}
            fullWidth
            type="submit"
            disabled={!email || !password}
          >
            Iniciar Sesión
          </Button>
        </form>
      </Stack>
    </Stack>
  );
};

export default Login;
