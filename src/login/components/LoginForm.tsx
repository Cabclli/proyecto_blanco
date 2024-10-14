import React from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  error: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  error,
  handleSubmit
}) => {
  return (
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
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: '#ccc',
              },
              "&:hover fieldset": {
                borderColor: '#bbb',
              },
              "&.Mui-focused fieldset": {
                borderColor: 'white',
              },
              "& input": {
                color: '#fff',
              },
            }
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: '#ccc',
              },
              "&:hover fieldset": {
                borderColor: '#bbb',
              },
              "&.Mui-focused fieldset": {
                borderColor: 'white',
              },
              "& input": {
                color: '#fff',
              },
            }
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        >
          Iniciar Sesión
        </Button>
      </form>
    </Stack>
  );
};

export default LoginForm;
