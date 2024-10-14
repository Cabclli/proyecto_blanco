import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

// Define la interfaz para las propiedades del componente
interface ProductCardProps {
  component: {
    name: string;
    description: string;
    price: number;
    hrefSelectPlan: string;
    hrefViewMore: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ component }) => {
  return (
    <Card
      sx={{
        minHeight: "345px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
      elevation={4}
    >
      <CardHeader title={component.name} subheader={component.description} />
      <Box>
        <CardContent>
          <Typography variant="caption">Desde</Typography>
          <Typography variant="h4" className="title">
            {`AR$ ${component.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00`}
          </Typography>
          <Typography variant="caption">/mes</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            className="button contained"
            href={component.hrefSelectPlan}
          >
            Seleccionar
          </Button>
          <Button
            variant="text"
            className="button button-text"
            href={component.hrefViewMore}
          >
            Ver más
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ProductCard;
