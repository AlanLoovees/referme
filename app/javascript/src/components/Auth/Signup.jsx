import React, { useState } from "react";

import authApi from "apis/auth";

import SignupForm from "./Form/SignupForm";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    const payload = {
      user: {
        email,
        password,
        password_confirmation: confirmPassword,
      },
    };

    try {
      const response = await authApi.signup(payload);
      localStorage.setItem("token", response.headers.authorization);
      setTimeout(() => (window.location.href = "/"), 1000);
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <SignupForm
      handleSubmit={handleSubmit}
      setConfirmPassword={setConfirmPassword}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
};

export default Signup;
