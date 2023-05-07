import React from "react";

import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import authApi from "apis/auth";

const StyledContent = styled("div")(() => ({
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

const Dashboard = () => {
  const handleLogout = async () => {
    try {
      await authApi.logout();
      localStorage.removeItem("token");
      window.location.href = "/";
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <StyledContent>
        <Stack spacing={2}>
          <Typography>We grow when you spread the word:</Typography>
          <TextField label="Email to Refer" name="email" />
          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            // onClick={handleSubmit}
          >
            Refer
          </Button>
          <Button
            fullWidth
            color="error"
            size="large"
            type="submit"
            variant="contained"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Stack>
      </StyledContent>
      ;
    </Container>
  );
};

export default Dashboard;
