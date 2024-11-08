import React from "react";
import { Typography, Stack, CardMedia, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "../carrito.module.css";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  updateQuantity: (id: number, newQuantity: number) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  updateQuantity,
  removeFromCart,
}) => {
  return (
    <Stack className={styles.listItem}>
      <CardMedia
        component="img"
        image="https://static.gigabyte.com/StaticFile/Image/Global/1f7a4b7372688a9959a997aa486252e1/Product/25956/Png"
        className={styles.image}
      />
      <Stack className={styles.productInfo}>
        <p>{name}</p>
        <p>USD${(price * quantity).toFixed(2)}</p>
      </Stack>
      <Stack className={styles.addRemoveButtons}>
        <Button onClick={() => updateQuantity(id, quantity - 1)}>
          <RemoveIcon />
        </Button>
        <Typography>{quantity}</Typography>
        <Button onClick={() => updateQuantity(id, quantity + 1)}>
          <AddIcon />
        </Button>
        <Button onClick={() => removeFromCart(id)}>
          <DeleteIcon />
        </Button>
      </Stack>
    </Stack>
  );
};

export default CartItem;
