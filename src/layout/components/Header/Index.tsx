import * as React from "react";
import { Stack, Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import SearchInput from "./components/SearchInput.jsx";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => (
  <>
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 2,
      }}
    >
      <Stack sx={{ flexGrow: 1, paddingLeft: "28%", flexDirection: "row" }}>
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
        justifyContent: "space-evenly",
        bgcolor: "#285b99",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <Button sx={{ color: "#fff" }}>Productos</Button>
      <Button sx={{ color: "#fff" }}>Arma tu PC</Button>
      <Button sx={{ color: "#fff" }}>Ayuda</Button>
    </Stack>
  </>
);

export default Header;
