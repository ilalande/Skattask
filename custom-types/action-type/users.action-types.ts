import { IUser } from '../content-types';
import { types } from '../../redux/actions/users.action';

export interface IgetUsers {
  type: types.GET_USERS;
}

export interface IsetUsersInStore {
  type: types.SET_USERSINSTORE;
  payload: IUser[];
}
export interface IGetLoggedUser {
  type: types.GET_LOGGED_USER;
  payload: string;
}

export interface ISetLoggedUser {
  type: types.SET_LOGGED_USER_IN_STORE;
  payload: IUser;
}

export type UserAction =
  | IgetUsers
  | IsetUsersInStore
  | ISetLoggedUser
  | IGetLoggedUser;
