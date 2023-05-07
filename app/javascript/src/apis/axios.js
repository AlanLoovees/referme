import axios from "axios";

axios.defaults.baseURL = "/";

export const setAuthHeaders = () => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document
      .querySelector('[name="csrf-token"]')
      .getAttribute("content"),
  };
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers["X-Auth-Token"] = token;
  }
};
