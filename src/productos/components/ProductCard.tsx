import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import styles from './ProductCard.module.css';

interface ProductCardProps {
  component: {
    id: number;
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

  const handleProductClick = () => {
    router.push(`/detalle/${component.id}`);
  };

  return (
    <Card className={styles.productCard} onClick={handleProductClick}>
      <CardMedia
        component="img"
        image="https://static.gigabyte.com/StaticFile/Image/Global/1f7a4b7372688a9959a997aa486252e1/Product/25956/Png"
        alt={component.name}
        className={styles.cardImage}
      />
      <Typography variant="h5" sx={{marginLeft: "5%", marginRight:"5%"}}>
        {component.name}
      </Typography>
      <CardContent className={styles.cardContent}>
        <Typography variant="h5" fontWeight="bold">
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
