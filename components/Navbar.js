import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { Box } from "@mui/material";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from '@mui/icons-material/Logout';
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const session = useAuth();

  const cart = useCart();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            MyShop
          </Link>
        </Typography>

        <Box>
          <Link href="/cart" passHref>
            <Button color="inherit">
              <Badge
                badgeContent={cart.cartItems?.length || 0}
                color="secondary"
              >
                <ShoppingCartIcon />
              </Badge>
            </Button>
          </Link>

          {session.user ? (
            <Button
              color="inherit"
              onClick={session.logout}
              component={Link}
              href="/"
            >
              <LogoutIcon />
            </Button>
          ) : (
            <Link href="/auth" passHref>
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
