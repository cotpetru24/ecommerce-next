import React from "react";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";

const Cart = () => {

    const cart = useCart();

    return (
        <Container>
            {cart.cartItems?.length > 0 ? (
                <>
                    <Typography variant="h4">Cart</Typography>
                    <Grid container spacing={4}>
                        {cart.cartItems.map(product => (
                            <Grid key={product.id}>
                                <CartItem product={product} />
                            </Grid>
                        ))}
                        <Typography variant="h6">Total: £{cart.cartItems.reduce((total, item)=> total + item.price*(item.quantity || 1), 0)}</Typography>
                        <Button variant="outlined">Proceed to Checkout </Button>
                    </Grid>
                </>
            ) : (
                <Typography variant="h4">No products added to cart yet.</Typography>
            )}
        </Container>
    )
}

export default Cart;