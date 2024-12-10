import React, { useState, useEffect } from "react";
import { OutlinedInput, InputAdornment, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link"; // Importar el componente Link
import styles from './SearchInput.module.css'; // Importa el archivo CSS

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
    <Stack className={styles.searchInput}>
      <OutlinedInput
        value={query}
        onChange={handleChange}
        className={`${styles.input} ${styles.inputOutlined}`} // Aplicamos las clases CSS
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon className={styles.inputIcon} />{" "}
            {/* Icono con clase CSS */}
          </InputAdornment>
        }
      />

      {/* Mostrar los resultados filtrados debajo de la barra de búsqueda */}
      {query !== "" && ( // Solo mostramos los resultados si hay texto en la búsqueda
        <Stack className={styles.resultsContainer}>
          {filteredData.length === 0 ? (
            <Typography className={styles.noResults}>
              No results found
            </Typography>
          ) : (
            filteredData.map((item) => (
              <Link href={`/detalle/${item.id}`} key={item.id} passHref>
                <Typography className={styles.resultItem}>
                  {item.name}
                </Typography>
              </Link>
            ))
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default SearchInput;
