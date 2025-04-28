import { Container, Typography, Box, TextField, Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here later
    console.log("Login submitted");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    //chek if password is same as confirm password
    // Add register logic here later
    console.log("Register submitted");
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

            <Button type="submit" variant="contained" fullWidth onClick={()=>handleLogin}>
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
              Sign Up
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

            <Button type="submit" variant="contained" fullWidth onClick={()=>handleRegister}>
              Sign Up
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
    </Container>
  );
};

export default Auth;
