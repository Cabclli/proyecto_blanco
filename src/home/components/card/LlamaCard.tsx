import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";


interface ProductCardProps {
  component: {
    id: number;
    name: string;
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ component }) => {
  const formattedPrice = `USD$ ${component.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();

    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const updatedCart = currentCart.map((item: any) => {
      // Si el producto ya existe, incrementar su cantidad
      if (item.id === component.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    const productExists = updatedCart.some((item: any) => item.id === component.id);

    // Si el producto no existe, agregarlo al carrito
    const finalCart = productExists ? updatedCart : [...updatedCart, { ...component, quantity: 1 }];

    localStorage.setItem("cart", JSON.stringify(finalCart));

    // Disparar el evento de storage para que la página del carrito se actualice
    window.dispatchEvent(new StorageEvent("storage", { key: "cart", newValue: JSON.stringify(finalCart) }));
  };

  return (
    <Card sx={{ height: "100%" }} >
      <CardMedia
        component="img"
        image="https://static.gigabyte.com/StaticFile/Image/Global/1f7a4b7372688a9959a997aa486252e1/Product/25956/Png"
        alt={component.name}
      />
      <Typography variant="h5" sx={{ marginLeft: "5%", marginRight: "5%" }}>
        {component.name}
      </Typography>

      <CardContent 
        sx={{

          display:"flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }} >
        <Typography variant="h5" fontWeight="bold">
          {formattedPrice}
        </Typography>
        <Button onClick={handleAddToCart}>
          <ShoppingCart />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
