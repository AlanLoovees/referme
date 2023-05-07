import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import invitationApi from "apis/invitation";

import InvitationAcceptForm from "./Form/InvitationAcceptForm";

const InvitationAccept = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const query = new URLSearchParams(useLocation().search);
  const invitationToken = query.get("invitation_token");

  const handleSubmit = async event => {
    event.preventDefault();

    const payload = {
      invitation_token: invitationToken,
      password,
      password_confirmation: confirmPassword,
    };

    try {
      const response = await invitationApi.accept(payload);
      localStorage.setItem("token", response.headers.authorization);
      setTimeout(() => (window.location.href = "/"), 1000);
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <InvitationAcceptForm
      handleSubmit={handleSubmit}
      setConfirmPassword={setConfirmPassword}
      setPassword={setPassword}
    />
  );
};

export default InvitationAccept;
