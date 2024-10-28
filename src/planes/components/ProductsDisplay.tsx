import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; // Ajusta la ruta según tu estructura
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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

  const router = useRouter();
  const handleVolverClick = () => {
    router.push("/");
  };


  return (
    <div>  
      <Stack sx={{ display:"flex",
        flexDirection:"row",
        borderBottom:"3px solid gray",
        marginLeft: "10%",
        marginRight:"10%",
        paddingTop: "2%",
        alignItems:"center"
        }}>
        <Button onClick={handleVolverClick}>
          <ArrowBackIosIcon/>
        </Button>
        <Typography variant="h4">Destacados</Typography>
      </Stack>
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
    </div>
  );
};

export default ComponentList;
