import axios from "axios";

const signup = payload => axios.post("api/v1/signup", payload);

const login = payload => axios.post("api/v1/login", payload);

const logout = () => axios.delete("api/v1/logout");

const authApi = {
  signup,
  login,
  logout,
};

export default authApi;
