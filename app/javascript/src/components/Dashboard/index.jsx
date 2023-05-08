import React, { useEffect, useState } from "react";

import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import authApi from "apis/auth";
import currentUserApi from "apis/currentUser";
import invitationApi from "apis/invitation";

const StyledContent = styled("div")(() => ({
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

const Dashboard = () => {
  const [email, setEmail] = useState("");
  const [invites, setInvites] = useState([]);

  const handleLogout = async () => {
    try {
      await authApi.logout();
      localStorage.removeItem("token");
      window.location.href = "/";
    } catch (error) {
      logger.error(error);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await invitationApi.create({ user: { email } });
    } catch (error) {
      logger.error(error);
    }
  };

  const fetchInvites = async () => {
    try {
      const response = await currentUserApi.list();
      setInvites(response.data.invited_users);
    } catch (error) {
      logger.error(error);
    }
  };
  useEffect(() => {}, [invites]);

  useEffect(() => {
    fetchInvites();
  }, []);

  return (
    <Container component="form" maxWidth="sm" onSubmit={handleSubmit}>
      <StyledContent>
        <Stack spacing={2}>
          <Typography>We grow when you spread the word:</Typography>
          <TextField
            label="Email to Refer"
            name="email"
            onChange={e => setEmail(e.target.value)}
          />
          <Button fullWidth size="large" type="submit" variant="contained">
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
        <Typography sx={{ pt: 5, pb: 3, textAlign: "center" }} variant="h5">
          {invites.length ? "Invited Users" : ""}
        </Typography>
        {invites.map(user => (
          <Typography key={user.id} sx={{ mt: 2, textAlign: "center" }}>
            {user.email}
          </Typography>
        ))}
      </StyledContent>
    </Container>
  );
};

export default Dashboard;
