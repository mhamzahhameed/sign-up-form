import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../Firebase";
import { LOGGEDINROUTE } from "../routes/Route";
import {
  Box,
  Button,
  Container,
  createTheme,
  TextField,
  ThemeProvider,
} from "@mui/material";

const SignIn = () => {
  const auth = getAuth(app);

  const [email, setEmail] = useState();

  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const theme = createTheme();

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // eslint-disable-next-line
        const user = userCredential.user;
        navigate(LOGGEDINROUTE);
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

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
              onClick={signIn}
            >
              Sign In
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default SignIn;
