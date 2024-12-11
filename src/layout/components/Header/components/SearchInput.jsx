import React, { useState, useEffect } from "react";
import {
  OutlinedInput,
  InputAdornment,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import styles from "./SearchInput.module.css";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);

    if (searchQuery === "") {
      setFilteredData([]);
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredData(filtered);
    }
    setSelectedIndex(-1);
  };

  const handleKeyDown = (event) => {
    if (filteredData.length === 0) return;

    if (event.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        prevIndex < filteredData.length - 1 ? prevIndex + 1 : 0
      );
    } else if (event.key === "ArrowUp") {
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : filteredData.length - 1
      );
    } else if (event.key === "Enter" && selectedIndex >= 0) {
      const selectedItem = filteredData[selectedIndex];
      if (selectedItem) {
        window.location.href = `/detalle/${selectedItem.id}`;
      }
    }
  };

  return (
    <Stack className={styles.container}>
      <OutlinedInput
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles.input} // Aplica la clase modular aquí
        sx={{
          width: "100%",
          paddingRight: "10px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#285b99", // Color por defecto
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#285b99", // Color en hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "solid 1px #285b99", // Color al enfocarse
          },
        }}
        endAdornment={
          <InputAdornment>
            <SearchIcon className={styles.searchIcon} />
          </InputAdornment>
        }
      />

      {query !== "" && (
        <Stack className={styles.resultsContainer}>
          {filteredData.length === 0 ? (
            <Typography className={styles.noResults}>
              No results found
            </Typography>
          ) : (
            filteredData.map((item, index) => (
              <Link href={`/detalle/${item.id}`} key={item.id} passHref>
                <Typography
                  className={`${styles.resultItem} ${
                    index === selectedIndex ? styles.selectedItem : ""
                  }`}
                >
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
