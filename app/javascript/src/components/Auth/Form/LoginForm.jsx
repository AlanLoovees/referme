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

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container maxWidth="sm">
      <StyledContent>
        <Typography gutterBottom variant="h4">
          Sign in to ReferMe!
        </Typography>
        <Typography sx={{ mb: 5 }} variant="body2">
          New around here?
          <Link variant="subtitle2">Get started</Link>
        </Typography>
        <Stack spacing={3}>
          <TextField label="Email address" name="email" />
          <TextField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
          />
        </Stack>
        <Box sx={{ my: 2 }} onClick={() => setShowPassword(!showPassword)}>
          <Checkbox name="toggleShowPassword" />
          {showPassword ? "Hide" : "Show"} Password
        </Box>
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          // onClick={handleSubmit}
        >
          Login
        </Button>
      </StyledContent>
    </Container>
  );
};

export default LoginForm;
