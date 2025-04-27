import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import CartProvider from "@/context/CartContext";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/theme";
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <>
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
      </CartProvider>
    </>
    </ThemeProvider>
  );
}
