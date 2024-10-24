import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; // Ajusta la ruta según tu estructura
import { Grid } from "@mui/material";

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

  useEffect(() => {
    const fetchComponents = async () => {
      const response = await fetch("/api"); // Asegúrate de que esta sea la ruta correcta
      const data = await response.json();
      setComponents(data);
    };

    fetchComponents();
  }, []);

  return (
    <Grid container spacing={2}>
      {components.map((component) => (
        <ProductCard
          key={component.id}
          component={{
            name: component.name,
            description: component.category.name,
            price: component.price,
          }}
        />
      ))}
    </Grid>
  );
};

export default ComponentList;
