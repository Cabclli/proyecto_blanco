import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Button, Stack, Typography, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styles from './ProductDisplay.module.css';

interface ComponentData {
  id: number;
  name: string;
  category: {
    name: string;
  };
  price: number;
  hrefViewMore: string;
  hrefSelectPlan: string;
}

const ComponentList: React.FC = () => {
  const [components, setComponents] = useState<ComponentData[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("");

  useEffect(() => {
    const fetchComponents = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setComponents(data);
    };

    fetchComponents();
  }, []);

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSortOrder(event.target.value);
  };

  const sortedComponents = [...components].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    }
    return 0;
  });

  const router = useRouter();
  const handleVolverClick = () => {
    router.push("/");
  };

  return (
    <div>
      <Stack className={styles.gridFilter}>  
        <Stack className={styles.destacados}>
          <Button className={styles.backButton} onClick={handleVolverClick}>
            <ArrowBackIosIcon className={styles.ArrowBackIosIcon}/>
          </Button>
          <Typography variant="h4">Destacados</Typography>
        </Stack>

        <Stack className={styles.filtro}>
          <FormControl sx={{
                borderBottom: "2px solid #285b99",
                height: "45px",
                width: "100%",
                ".MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}>
            <InputLabel id="sort-label">Ordenar por precio</InputLabel>
            <Select
              value={sortOrder}
              onChange={handleSortChange}
              label="Ordenar por precio"
            >
              <MenuItem value="">Sin ordenar</MenuItem>
              <MenuItem value="asc">De menor a mayor</MenuItem>
              <MenuItem value="desc">De mayor a menor</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      
      <div className={styles.productGrid}>
        {sortedComponents.map((component) => (
          <ProductCard
            key={component.id}
            component={{
              name: component.name,
              price: component.price,
              id: component.id
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ComponentList;