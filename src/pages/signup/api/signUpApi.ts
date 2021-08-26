// api to get all user
import { axios } from "../../../app/services";

import { UserPayload } from "../interface/userPayload";
import { UserResponse } from "../interface/userResponse";

//api for register user
export const registerUser = async (
  payload: UserPayload
): Promise<UserResponse> => {
  const { data } = await axios.post(`/auth/signup`, payload);
  return data;
};
