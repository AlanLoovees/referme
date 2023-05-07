import React, { useState } from "react";

import authApi from "apis/auth";

import LoginForm from "./Form/LoginForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    const payload = {
      user: {
        email,
        password,
      },
    };

    try {
      const response = await authApi.login(payload);
      localStorage.setItem("token", response.headers.authorization);
      setTimeout(() => (window.location.href = "/"), 1000);
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
};

export default Login;
