import React from "react";
import { Button, colors, Stack, TextField, Typography } from "@mui/material";

interface RegisterFormProps {
  name: string;
  lastname: string;
  email: string;
  password: string;
  setName: (value: string) => void;
  setLastname: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  error: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  name,
  lastname,
  email,
  password,
  setName,
  setLastname,
  setEmail,
  setPassword,
  error,
  handleSubmit,
}) => {
  return (
    <Stack
      sx={{
        maxWidth: "500px",
        padding: "30px",
        
        borderRadius: "15px",
        boxShadow: 3,
      }}
    >
      <Typography variant="h5"  textAlign="center" marginBottom={2}>
        Regístrate
      </Typography>
      {error && (
        <Typography color="#fff" textAlign="center" marginBottom={2}>
          {error}
        </Typography>
      )}
      
        <TextField
          id="email"
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc",
              },
              "&:hover fieldset": {
                borderColor: "#bbb",
              },
             
              
            },
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{
            style: {  },
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
                borderColor: "#ccc",
              },
              "&:hover fieldset": {
                borderColor: "#bbb",
              },
              
            },
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={{
            style: { },
          }}
        />
        <Typography >Datos personales</Typography>
        <br />
        <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Nombre"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc",
              },
              "&:hover fieldset": {
                borderColor: "#bbb",
              },
             
            },
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputLabelProps={{
            style: {},
          }}
        />
        <TextField
          id="lastname"
          label="Apellido"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc",
              },
              "&:hover fieldset": {
                borderColor: "#bbb",
              },
             
             
            },
          }}
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          InputLabelProps={{
            style: { },
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
          Registrarse
        </Button>
      </form>
      
    </Stack>
  );
};

export default RegisterForm;
