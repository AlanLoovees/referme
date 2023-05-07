import axios from "axios";

const signup = payload => axios.post("api/v1/signup", payload);

const login = payload => axios.post("api/v1/login", payload);

const authApi = {
  signup,
  login,
};

export default authApi;
