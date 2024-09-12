import * as React from "react";
import { Stack, Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material"; 
import SearchInput from "./components/SearchInput.jsx"
import PersonIcon from '@mui/icons-material/Person';

const Header = () => (
  <Stack sx={{ flexDirection:"row", justifyContent:"center", margin:2 }}>
    <SearchInput sx={undefined} />    
    <Button>
      <ShoppingCart sx={{color: "#285b99"}}/>
    </Button>
    <Button>
      <PersonIcon sx={{color: "#285b99"}}/>
    </Button>
  </Stack>
);

export default Header;

