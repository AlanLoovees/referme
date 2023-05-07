import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import authApi from "apis/auth";

import LoginForm from "./Form/LoginForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();

    const payload = {
      user: {
        email,
        password,
      },
    };

    try {
      await authApi.login(payload);
      history.push("/");
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
