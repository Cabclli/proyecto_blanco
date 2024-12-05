import React, { useState, useEffect } from "react";
import { OutlinedInput, InputAdornment, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link"; // Importar el componente Link

const SearchInput = () => {
  const [query, setQuery] = useState(""); // Estado para el texto de la búsqueda
  const [data, setData] = useState([]); // Estado para los datos obtenidos de la API
  const [filteredData, setFilteredData] = useState([]); // Estado para los datos filtrados

  // Obtener datos de la API cuando el componente se monte
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api"); // Cambia esta URL por la de tu API
        const result = await response.json();
        setData(result); // Guardamos los datos obtenidos
        setFilteredData(result); // Inicialmente mostramos todos los datos
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filtrar los datos en función de la búsqueda
  const handleChange = (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);

    if (searchQuery === "") {
      setFilteredData([]); // Si el campo de búsqueda está vacío, no mostrar resultados
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = data.filter(
        (item) => item.name.toLowerCase().includes(lowercasedQuery) // Ajusta esto según la propiedad que quieras filtrar
      );
      setFilteredData(filtered);
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 600, margin: "0 auto", paddingTop: 2 }}>
      <OutlinedInput
        value={query}
        onChange={handleChange}
        sx={{
          width: "100%", // Hace que la barra ocupe todo el ancho disponible
          height: 45, // Altura constante para el campo
          borderRadius: 30, // Bordes redondeados
          paddingRight: "10px", // Un pequeño espacio al lado derecho
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
            <SearchIcon sx={{ color: "#285b99", fontSize: 26 }} />{" "}
            {/* Icono con tamaño fijo */}
          </InputAdornment>
        }
      />

      {/* Mostrar los resultados filtrados debajo de la barra de búsqueda */}
      {query !== "" && ( // Solo mostramos los resultados si hay texto en la búsqueda
        <Box sx={{ marginTop: 1, maxHeight: 200, overflowY: "auto" }}>
          {filteredData.length === 0 ? (
            <Typography variant="body2" color="textSecondary">
              No results found
            </Typography>
          ) : (
            filteredData.map((item) => (
              <Link href={`/detalle/${item.id}`} key={item.id} passHref>
                <Typography
                  sx={{
                    padding: "8px 0",
                    fontSize: 14,
                    cursor: "pointer",
                    "&:hover": { color: "#285b99" },
                  }}
                >
                  {item.name}
                </Typography>
              </Link>
            ))
          )}
        </Box>
      )}
    </Box>
  );
};

export default SearchInput;
