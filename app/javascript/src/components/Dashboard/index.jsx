import React from "react";

import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContent = styled("div")(() => ({
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

const Dashboard = () => (
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
      </Stack>
    </StyledContent>
    ;
  </Container>
);

export default Dashboard;
