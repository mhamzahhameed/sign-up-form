import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../Firebase";
import { SIGNINROUTE } from "../routes/Route";
import {
  Box,
  Button,
  Container,
  createTheme,
  TextField,
  ThemeProvider,
} from "@mui/material";

const SignUp = () => {
  // eslint-disable-next-line
  const auth = getAuth(app);

  const [email, setEmail] = useState();

  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const theme = createTheme();

  function signUp() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // eslint-disable-next-line
        const user = userCredential.user;
        navigate(SIGNINROUTE);
        // ...
      })

      .catch((error) => {
        const errorCode = error.code;
        // eslint-disable-next-line
        const errorMessage = error.message;
        alert(errorCode);
        // ..
      });
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <Box
            sx={{
              mt: 1,
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              onClick={signUp}
            >
              Sign Up
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default SignUp;
