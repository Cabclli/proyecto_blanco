import React from "react";
import { OutlinedInput, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => (
  <OutlinedInput
    sx={{
      width: "70%",
      borderRadius: "15px",
      height: 50,
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#285b99", // Color del borde
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#285b99", // Color del borde al pasar el mouse
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#285b99", // Color del borde cuando el input está enfocado
      },
    }}
    endAdornment={
      <InputAdornment position="end">
        <SearchIcon sx={{ color: "#285b99" }} />
      </InputAdornment>
    }
  />
);

export default SearchInput;
