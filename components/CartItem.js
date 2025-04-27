import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useCart } from "@/context/CartContext";

const CartItem = ({ product }) => {
    const cart = useCart();

    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between" p={2} border={1} borderRadius={2} gap={2}>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body1">£{product.price}</Typography>
            <Button variant="outlined" color="error" onClick={() => cart.removeFromCart(product)}>Remove</Button>
        </Box>
    )
}

export default CartItem;