// api to get all user
import { axios } from "../../../app/services";
import { task } from "../interface/task";

export const getTodos = async (): Promise<task[]> => {
  const { data } = await axios.get(`tasks`);
  const response = Array.isArray(data) ? data : [];
  return response;
};
