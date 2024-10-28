import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

interface ProductCardProps {
  component: {
    name: string;
    description: string;
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
    <Grid item xs={3}>
      <Card sx={{ margin: "10px", maxWidth: 350, borderRadius: "5%", display: "flex", flexDirection: "column" }}>
        <div style={{ overflow: "hidden", borderRadius: "5%", maxHeight: "300px", maxWidth: "250px", margin: "0 auto" }}>
          <CardMedia
            component="img"
            image="https://static.gigabyte.com/StaticFile/Image/Global/1f7a4b7372688a9959a997aa486252e1/Product/25956/Png"
            sx={{ objectFit: "contain" }}
          />
        </div>
        <CardHeader title={component.name} />
        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h5" fontWeight="bold">
            {formattedPrice}
          </Typography>
          <Button
            onClick={handleCarritoClick}
            sx={{
              marginLeft: "25%",
              backgroundColor: "#285b99",
              padding: "10px",
              borderRadius: "10%",
              "&:hover": { backgroundColor: "#1e4a76" },
            }}
          >
            <ShoppingCart sx={{ color: "#fff" }} />
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
