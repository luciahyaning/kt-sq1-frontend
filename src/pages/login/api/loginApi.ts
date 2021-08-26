// api to get all user
import { axios } from "../../../app/services";
import { UserResponse } from "../../signup/interface/userResponse";
import { LoginPayload } from "../interface/loginPayload";
import { Token } from "../interface/token";

//api for login
export const sigIn = async (payload: LoginPayload): Promise<Token> => {
  const { data } = await axios.post(`/auth/signin`, payload);
  return data;
};
