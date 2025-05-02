import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Typography,
  Grid,
  Button,
  Box,
  Select,
  MenuItem,
  InputLabel,
  Snackbar,
} from "@mui/material";
import { useCart } from "@/context/CartContext";

const Product = () => {
  const { query } = useRouter();
  const { id } = query;

  const [product, setProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const cart = useCart();

  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    if (id) {
      fetch(`/api/product/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          console.log(JSON.stringify(data, null, 2));
        });
    }

    console.log(JSON.stringify(product, null, 2));
  }, [id]);

  const handleChange = (event) => {
    setSelectedSize(event.target.value);
  };

  if (!product) return <Typography>Loading...</Typography>;

  const sizeArray = product.sizes
    .split(",")
    .map((size) => parseInt(size.trim(), 10))
    .filter((size) => !isNaN(size));

  return (
    <Container>
      <Typography variant="h4">{product.name}</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img src={product.image} alt={product.name} style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">{product.brand}</Typography>
          <Typography variant="h5">{product.model}</Typography>
          <Box>
            <InputLabel id="size-select-label">Size</InputLabel>
            <Select
              labelId="size-select-label"
              id="size-select"
              value={selectedSize}
              onChange={handleChange}
              fullWidth
            >
              {sizeArray.map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Price: £{product.price}
          </Typography>
          <Typography variant="body1">{product.description}</Typography>

          {product.stock > 0 ? (
            <Button
              variant="outlined"
              sx={{ mt: 2 }}
              onClick={() => {
                cart.addToCart(product);
                setOpen(true);
              }}
            >
              Add to Cart
            </Button>
          ) : (
            <Typography variant="h5" sx={{ mt: 2 }} color="error">
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
