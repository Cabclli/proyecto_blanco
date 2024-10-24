import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import React from "react";

// Define la interfaz para las propiedades del componente
interface ProductCardProps {
  component: {
    name: string;
    description: string;
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ component }) => {
  return (
    <Grid item xs={4}>
      <Card sx={{ marginLeft: "10%" }}>
        <CardHeader title={component.name} subheader={component.description} />
        <CardContent>
          <Typography variant="h4" className="title">
            {`USD$ ${component.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
