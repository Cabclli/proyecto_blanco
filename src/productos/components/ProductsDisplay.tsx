import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import {
  Button,
  Stack,
  Typography,
  MenuItem,
  Select,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./ProductDisplay.module.css";

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
  const [sortOrder, setSortOrder] = useState<string>("Todos los productos"); // Valor predeterminado
  const [selectedCategory, setSelectedCategory] = useState<string>("Seleccionar Categoría"); // Estado para la categoría seleccionada (por defecto "Seleccionar Categoría")

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

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value);
  };

  const sortedComponents = [...components].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    }
    return 0;
  });

  // Filtrar por categoría si se seleccionó una
  const filteredComponents = selectedCategory !== "Seleccionar Categoría"
    ? sortedComponents.filter(
        (component) => component.category.name === selectedCategory
      )
    : sortedComponents;

  const router = useRouter();
  const handleVolverClick = () => {
    router.push("/");
  };

  // Obtener todas las categorías únicas de los componentes
  const categories = [
    ...new Set(components.map((component) => component.category.name)),
  ];

  return (
    <div>
      <Stack className={styles.title}>
        <Stack className={styles.destacados}>
          <Button className={styles.backButton} onClick={handleVolverClick}>
            <ArrowBackIosIcon className={styles.ArrowBackIosIcon} />
          </Button>
          <Typography variant="h4">Todos los productos</Typography> {/* Aquí cambia el texto */}
        </Stack>
        <Stack>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderBottom: "2px solid #285b99",
              height: "45px",
              width: "400px",
              ".MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <Select
              value={sortOrder}
              onChange={handleSortChange}
              sx={{
                display: "flex",
                alignItems: "baseline",
                width: "100%",
                padding: "0px",
              }}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 300,
                  },
                },
              }}
            >
              <MenuItem value="Todos los productos">Todos los productos</MenuItem> {/* Opción predeterminada */}
              <MenuItem value="asc">De menor a mayor</MenuItem>
              <MenuItem value="desc">De mayor a menor</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderBottom: "2px solid #285b99",
              height: "45px",
              width: "400px",
              ".MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              sx={{
                display: "flex",
                alignItems: "baseline",
                width: "100%",
                padding: "0px",
              }}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 300,
                  },
                },
              }}
            >
              <MenuItem value="Seleccionar Categoría">Seleccionar Categoría</MenuItem> {/* Opción predeterminada */}
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Stack sx={{ display: "flex", flexDirection: "row" }}></Stack>
      <div className={styles.productGrid}>
        {filteredComponents.map((component) => (
          <ProductCard
            key={component.id}
            component={{
              name: component.name,
              price: component.price,
              id: component.id,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ComponentList;
