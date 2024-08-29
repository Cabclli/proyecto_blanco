import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FaceIcon from "@mui/icons-material/Face";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ maxWidth: 540, alignItems: "center" }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Busqueda"
        value="recents"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        label="Mensajes "
        value="favorites"
        icon={<MailOutlineIcon />}
      />
      <BottomNavigationAction
        label="Favoritos"
        value="nearby"
        icon={<FavoriteBorderIcon />}
      />
      <BottomNavigationAction
        label="Perfil"
        value="folder"
        icon={<FaceIcon />}
      />
    </BottomNavigation>
  );
}
