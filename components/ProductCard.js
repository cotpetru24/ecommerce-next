import React, { useState } from "react";
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from "@mui/material";
import Link from "next/link";
import Cart from "@/pages/cart";
import { useCart } from "@/context/CartContext";
import Snackbar from "@mui/material/Snackbar";


const ProductCard = ({ product }) => {

  const [open, setOpen] = useState(false);

  const cart = useCart();
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="text.primary" sx={{ mt: 1 }}>
          £{product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" fullWidth onClick={() => { cart.addToCart(product); setOpen(true) }}>+Add to Cart</Button>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={open}
          autoHideDuration={400}
          onClose={() => setOpen(false)}
          message="Added to cart!"
        />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
