import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import authApi from "apis/auth";

import SignupForm from "./Form/SignupForm";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();

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
      await authApi.signup(payload);
      history.push("/");
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
