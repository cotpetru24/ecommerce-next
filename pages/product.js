import React from "react";
import {useRouter} from "next/router";
import { Container, Typography, Grid, Button, Box, Select, MenuItem, InputLabel } from "@mui/material";
import { useCart } from "@/context/CartContext";

import {useEffect, useState} from "react";

const Product = (product) => {

  const {query} = useRouter();

  const {id} = query;

  const [product, setProduct] = useState(null);

  const cart = useCart();

  const [open, setOpen] = useState(false);

useEffect(()=>{
if(id){
  fetch(`/api/products/${id}`)
  .then((res)=>res.json())
  .then((data)=>setProduct(data))
}
}, [id])

if (!product) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h4">{product.name}</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">{product.brand}</Typography>
          <Typography variant="h5">{product.model}</Typography>
          <Box>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sizes}
              label="Age"
              onChange={handleChange}
            >
              {sizes.map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Typography variant="h5">Price: £{product.price}</Typography>
          <Typography variant="body1">{product.description}</Typography>

          {product.stock > 0 ? (
            <Button
              variant="outlined"
              onClick={() => {
                cart.addToCart(product);
                setOpen(true);
              }}
            >
              Add to Cart
            </Button>
          ) : (
            <Typography variant="h5" color="red">
              Out of Stock
            </Typography>
          )}
        </Grid>
      </Grid>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={400}
        onClose={() => setOpen(false)}
        message="Added to cart!"
      />
    </Container>
  );
};

export default Product;
