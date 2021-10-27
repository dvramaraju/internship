import { v4 as uuidv4 } from 'uuid'
import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useHistory } from 'react-router-dom';

export type AuthUser = {
  id: string
  firstName: string
  lastName: string
  userName: string
  email: string
  password: string
  confirmPassword: string
  age: string
}

export const SignUp = () => {
  const [details, setDetails] = useState({
    id: "",
    age: 0,
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validateForm = (): boolean => {
    return details.firstName.length >= 3 && details.lastName.length >= 3 && details.userName.length >= 3 && re.test(String(details.email).toLowerCase()) && details.email.length !== 0 && details.password.length > 5 && details.confirmPassword.length > 5 && details.password === details.confirmPassword && details.age !== 0;
  };

  const history = useHistory()

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log(details)
    setDetails({ ...details, id: uuidv4().toUpperCase() })
    axios.post("http://localhost:8000/users", details)
    history.push('/')
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
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={details.firstName}
                onChange={(event) => {
                  setDetails({ ...details, firstName: event.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={details.lastName}
                onChange={(event) => {
                  setDetails({ ...details, lastName: event.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="User Name"
                name="userName"
                autoComplete="name"
                value={details.userName}
                onChange={(event) => {
                  setDetails({ ...details, userName: event.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                type="email"
                name="email"
                autoComplete="email"
                value={details.email}
                onChange={(event) => {
                  setDetails({ ...details, email: event.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={details.password}
                onChange={(event) => {
                  setDetails({ ...details, password: event.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={details.confirmPassword}
                onChange={(event) => {
                  setDetails({ ...details, confirmPassword: event.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Number(details.age)}
                  // label="Age"
                  onChange={(event) => {
                    setDetails({ ...details, age: Number(event.target.value) })
                  }}
                >
                  {[...Array(100)].map((e, i) => {
                    return <MenuItem value={i + 1}>{i + 1}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox value="allowExtraEmails" color="primary" />
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={!validateForm()}
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
