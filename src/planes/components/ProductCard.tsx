import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import styles from './ProductCard.module.css';

interface ProductCardProps {
  component: {
    name: string;
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ component }) => {
  const formattedPrice = `USD$ ${component.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  const router = useRouter();

  const handleCarritoClick = () => {
    router.push("/carrito");
  };

  return (
    <Card className={styles.productCard}>
      <CardMedia
        component="img"
        image="https://via.placeholder.com/250"
        alt={component.name}
        className={styles.cardImage}
      />
      <Typography variant="h6" sx={{marginLeft: "5%", marginRight:"5%"}}>
        {component.name}
      </Typography>
      <CardContent className={styles.cardContent}>
        <Typography variant="h6" color="text.primary">
          {formattedPrice}
        </Typography>
        <Button
          onClick={handleCarritoClick}
          className={styles.cartButton}
        >
          <ShoppingCart />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
