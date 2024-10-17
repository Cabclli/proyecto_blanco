import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
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
    <Card>
      <CardHeader title={component.name} subheader={component.description} />
      <Grid >
        <CardContent>
          <Typography variant="h4" className="title">
            {`USD$ ${component.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
          </Typography>
        </CardContent>
      </Grid>
    </Card>
  );
};

export default ProductCard;
