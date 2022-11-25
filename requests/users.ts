import { IUser } from 'custom-types/content-types';

import axios from 'axios';

export const getUsersFromApi = async (): Promise<IUser[]> => {
  return axios.get(`/api/users`);
};
export const getLoggedUserByMailFromApi = async (
  email: string
): Promise<IUser> => {
  return await axios.get(`/api/user`);
};
