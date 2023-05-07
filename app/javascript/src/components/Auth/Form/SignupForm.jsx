import React, { useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContent = styled("div")(() => ({
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

const SignupForm = ({
  handleSubmit,
  setConfirmPassword,
  setEmail,
  setPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container maxWidth="sm">
      <StyledContent>
        <Typography gutterBottom variant="h4">
          Let's get you started!
        </Typography>
        <Typography sx={{ mb: 5 }} variant="body2">
          Have an account?{" "}
          <Link href="/login" variant="subtitle2">
            Login here
          </Link>
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Email address"
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={e => setPassword(e.target.value)}
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </Stack>
          <Box sx={{ my: 2 }} onClick={() => setShowPassword(!showPassword)}>
            <Checkbox name="toggleShowPassword" />
            {showPassword ? "Hide" : "Show"} Password
          </Box>
          <Button fullWidth size="large" type="submit" variant="contained">
            Sign Up
          </Button>
        </Box>
      </StyledContent>
    </Container>
  );
};

export default SignupForm;
