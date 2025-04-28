import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import CartProvider from "@/context/CartContext";
import AuthProvider from "@/context/AuthContext";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/theme";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  );
}
