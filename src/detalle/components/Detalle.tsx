import { CardMedia, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./detalle.module.css";

interface ComponentData {
  id: number;
  name: string;
  category: {
    name: string;
  };
  price: number;
  description: string;
}

const Detalles: React.FC = () => {
  const [components, setComponents] = useState<ComponentData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setComponents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComponents();
  }, []);

  const formattedPrice = components[0]
    ? `USD$ ${components[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    : "N/A";

  return (
    <Stack className={styles.container}>
      <Stack className={styles.imageContainer}>
        <CardMedia
          component="img"
          image="https://static.gigabyte.com/StaticFile/Image/Global/1f7a4b7372688a9959a997aa486252e1/Product/25956/Png"
          alt={components[0]?.name || "Image"}
        />
      </Stack>
      <Stack className={styles.detailsContainer}>
        <Typography variant="h4" component="h2">
          {components[0]?.name}
        </Typography>
        <Typography>
          {formattedPrice}
        </Typography>
        <Typography>
          {components[0]?.description || "No description available."}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Detalles;
