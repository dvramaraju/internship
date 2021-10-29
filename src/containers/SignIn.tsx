import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

export const SignIn = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  })

  const history = useHistory()

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validateForm = (): boolean => {
    return re.test(String(loginDetails.email).toLowerCase()) && loginDetails.password.length > 5;
  }
  const preventDef = (event: FormEvent<HTMLInputElement>) => event.preventDefault()
  function handleSubmit(email: string, password: string) {
    axios.request({ baseURL: `http://localhost:8000/users?email=${email}&password=${password}` })
      .then((res: any) => {
        const numb = res.data.length
        if (Number(numb) !== 0) {
          history.push("/dashboard");
          localStorage.setItem("user", JSON.stringify(res.data[0]));
        }
        else console.log("User Not Exist");
      })
      .catch((error: any) => console.log(error))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={preventDef}
          sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(event: any) => { setLoginDetails({ ...loginDetails, email: event.target.value }) }}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            onChange={(event: any) => { setLoginDetails({ ...loginDetails, password: event.target.value }) }}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={() => handleSubmit(loginDetails.email, loginDetails.password)}
            disabled={!validateForm()}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container >
  );
}
