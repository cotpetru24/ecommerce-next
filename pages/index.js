import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Nike Air Max",
    description: "Nike shoes",
    price: 120,
    image: "/nike.jpeg",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    description: "Boost your energy",
    price: 150,
    image: "/adidas.jpeg",
  },
];

export default function Home() {
  return (
    <>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to my Shop
        </Typography>
        <Typography variant="body1" align="center">
          Explore our amazing products!
        </Typography>
      </Container>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={6}>
          {products.map(product => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

      </Container>
    </>
  );
}
