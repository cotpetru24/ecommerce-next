import { Container, Typography, Box, TextField, Button, Snackbar, Alert } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";


const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const hadleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };


  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here later
    console.log("Login submitted");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.passwordConfirm) {
      setOpen(true);
      return;
    }
  
    try {
      const response = await axios.post("/api/auth/register", {
        email: formData.email,
        password: formData.password,
      });
  
      console.log("Registered successfully!", response.data);
      localStorage.setItem("token", response.data.token);
  
      setIsLogin(true);
  
    } catch (error) {
      console.error("Registration failed", error.response?.data?.message || error.message);
      //add snackbar if failed
    }
  };
  
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        p: 2,
        pt: 4,
        height: "100%",
      }}
    >
      {isLogin ? (
        <form onSubmit={handleLogin}>
          <Box display="flex" flexDirection="column" gap={3}>
            <Typography
              variant="h4"
              gutterBottom
              color="text.primary"
              borderBottom={2}
            >
              Login
            </Typography>

            <TextField
              id="email"
              label="Email Address"
              variant="outlined"
              fullWidth
              autoComplete="email"
            />
            <TextField
              id="password"
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              autoComplete="current-password"
            />

            <Box display="flex" justifyContent="flex-end" width="100%">
              <Link href="#" passHref>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ cursor: "pointer" }}
                >
                  Forgot password?
                </Typography>
              </Link>
            </Box>

            <Button type="submit" variant="contained" fullWidth onClick={() => handleLogin}>
              Login
            </Button>

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap={1}
              mt={2}
            >
              <Typography variant="body2" color="text.primary">
                Don't have an account?
              </Typography>
              <Link
                href="#"
                passHref
                onClick={() => setIsLogin(false)}
              >
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ cursor: "pointer" }}
                >
                  Sign Up
                </Typography>
              </Link>
            </Box>
          </Box>
        </form>
      ) : (
        <form onSubmit={handleRegister}>
          <Box display="flex" flexDirection="column" gap={3}>
            <Typography
              variant="h4"
              gutterBottom
              color="text.primary"
              borderBottom={2}
            >
              Register
            </Typography>

            <TextField
              id="email"
              label="Email Address"
              variant="outlined"
              fullWidth
              autoComplete="email"
              onChange={hadleOnChange}
            />
            <TextField
              id="password"
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              autoComplete="current-password"
              onChange={hadleOnChange}
            />
            <TextField
              id="passwordConfirm"
              type="password"
              label="Confirm Password"
              variant="outlined"
              fullWidth
              autoComplete="current-password"
              onChange={hadleOnChange}
            />

            <Button type="submit" variant="contained" fullWidth onClick={() => handleRegister}>
              Register
            </Button>

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap={1}
              mt={2}
            >
              <Typography variant="body2" color="text.primary">
                Already have an account?
              </Typography>
              <Link
                href="#"
                passHref
                onClick={() => setIsLogin(true)}
              >
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ cursor: "pointer" }}
                >
                  Login
                </Typography>
              </Link>
            </Box>
          </Box>
        </form>
      )}

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          severity="error"
          onClose={() => setOpen(false)}
          sx={{
            width: '100%',
            boxShadow: 3,
          }}
        >
          Passwords do not match!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Auth;
