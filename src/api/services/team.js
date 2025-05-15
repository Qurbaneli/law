import { axiosInstance } from "../api";

const getTeam = () => {
  return axiosInstance.get("/management");
};

const getTeamSingle = (id) => {
  return axiosInstance.get(`/management/${id}`);
};

export { getTeam, getTeamSingle };
