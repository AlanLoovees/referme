import axios from "axios";

const create = payload => axios.post("/api/v1/invitation", payload);

const accept = payload => axios.put("/api/v1/invitation", payload);

const invitationApi = {
  create,
  accept,
};

export default invitationApi;
