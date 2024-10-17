import * as React from "react";
import { Stack, Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import SearchInput from "./components/SearchInput.jsx";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleProductosClick = () => {
    router.push("/productos")
  };

  return (
    <>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 2,
        }}
      >
        <Stack sx={{ flexGrow: 1, flexDirection: "row", paddingLeft: "27%" }}>
          <SearchInput />
          <Button>
            <ShoppingCart sx={{ color: "#285b99" }} />
          </Button>
        </Stack>
        <Stack sx={{ flexDirection: "row", marginLeft: "auto" }}>
          <Button
            onClick={handleLoginClick}
            sx={{
              bgcolor: "#285b99",
              color: "#fff",
              "&:hover": {
                bgcolor: "#1e4a76",
              }
            }}
          >
            <PersonIcon sx={{ color: "#fff", marginRight: 1 }} />
            Iniciar sesión
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
          onClick={handleProductosClick}
          sx={{
            color: "#fff",
            marginLeft: "10%",
            marginRight: "5%",
          }}
        >
          Productos
        </Button>
        <Button
        onClick={handleProductosClick} 
        sx={{ color: "#fff", marginLeft: "5%", marginRight: "5%" }}>
          Notebooks
        </Button>
        <Button sx={{ color: "#fff", marginLeft: "5%", marginRight: "5%" }}>
          Arma tu PC
        </Button>
        <Button
          sx={{
            color: "#fff",
            marginLeft: "5%",
            marginRight: "10%",
          }}
        >
          Ayuda
        </Button>
      </Stack>
    </>
  );
};

export default Header;
