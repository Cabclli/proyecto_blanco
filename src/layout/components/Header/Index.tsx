import * as React from "react";
import { Stack, Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import SearchInput from "./components/SearchInput.jsx";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link.js";

const Header = () => (
  <>
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 2,
      }}
    >
      <Stack sx={{ flexGrow: 1, flexDirection: "row", paddingLeft: "28%" }}>
        <SearchInput />
        <Button>
          <ShoppingCart sx={{ color: "#285b99" }} />
        </Button>
      </Stack>
      <Stack sx={{ flexDirection: "row", marginLeft: "auto" }}>
        <Button
          sx={{
            bgcolor: "#285b99",
            color: "#fff",
            "&:hover": {
              bgcolor: "#1e4a76",
            },
          }}
        >
          <PersonIcon sx={{ color: "#fff" }} />
          Iniciar sesion
        </Button>
      </Stack>
    </Stack>
    <Stack
      sx={{
        flexDirection: "row",
        bgcolor: "#285b99",
        paddingTop: "20px",
        paddingBottom: "20px",
        justifyContent: "center",
      }}
    >
    
      <Button
        sx={{
          color: "#fff",
          marginLeft: "20%",
          marginRight: "20%",
        }}
      >
        Productos
      </Button>
      
      <Button sx={{ color: "#fff" }}>Arma tu PC</Button>
      <Button
        sx={{
          color: "#fff",
          marginLeft: "20%",
          marginRight: "20%",
        }}
      >
        Ayuda
      </Button>
    </Stack>
  </>
);

export default Header;
