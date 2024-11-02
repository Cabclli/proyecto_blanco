// Carrito.tsx
import React, { useState, useEffect } from "react";
import { Button, Typography, List, ListItem, IconButton, Stack, CardMedia } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "../carrito/"
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const Carrito: React.FC = () => {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Cargar el carrito desde localStorage al montar el componente
    useEffect(() => {
        const loadCart = () => {
            const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
            setCart(savedCart);
        };

        // Cargar el carrito al montar el componente
        loadCart();

        // Agregar un event listener para detectar cambios en localStorage
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === "cart") {
                loadCart();
            }
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    // Calcular el total general del carrito
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Función para actualizar la cantidad de un producto
    const updateQuantity = (id: number, newQuantity: number) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    // Función para eliminar un producto del carrito
    const removeFromCart = (id: number) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    return (
        <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
            <Typography variant="h4" gutterBottom>
                Carrito de Compras
            </Typography>

            <List>
                {cart.length === 0 ? (
                    <Typography variant="h6">Tu carrito está vacío.</Typography>
                ) : (
                    cart.map((item) => (
                        <ListItem
                            key={item.id}
                            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0" }}
                        >
                            <CardMedia
                                component="img"
                                image="https://static.gigabyte.com/StaticFile/Image/Global/1f7a4b7372688a9959a997aa486252e1/Product/25956/Png"
                                style={{  width: "20%", objectFit: "contain" }}
                                
                            />
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Typography>{item.name}</Typography>
                                <Typography>USD${(item.price * item.quantity).toFixed(2)}</Typography>
                            </Stack>

                            <Stack direction="row" alignItems="center" spacing={1}>
                                <IconButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                    <RemoveIcon />
                                </IconButton>

                                <Typography>{item.quantity}</Typography>

                                <IconButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                    <AddIcon />
                                </IconButton>
                            </Stack>

                            <IconButton onClick={() => removeFromCart(item.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    ))
                )}
            </List>

            {cart.length > 0 && (
                <>
                    <Typography variant="h5" style={{ marginTop: "1rem" }}>
                        Total: USD${total.toFixed(2)}
                    </Typography>
                    <Button variant="contained" color="primary" style={{ marginTop: "1rem", width: "100%" }}>
                        Proceder al Pago
                    </Button>
                </>
            )}
        </div>
    );
};

export default Carrito;
