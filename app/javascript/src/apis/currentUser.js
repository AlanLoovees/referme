import axios from "axios";

const list = () => axios.get("/user_invites");

const currentUserApi = {
  list,
};

export default currentUserApi;
