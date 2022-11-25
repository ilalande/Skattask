import { IUser } from '../../custom-types/content-types';

import {
  IgetUsers,
  IsetUsersInStore,
  ISetLoggedUser,
  IGetLoggedUser,
} from '../../custom-types/action-type/users.action-types';

export enum types {
  GET_USERS = 'users/GET_USERS',
  SET_USERSINSTORE = 'users/SET_USERSINSTORE',
  GET_LOGGED_USER = 'users/GET_LOGGED_USER',
  SET_LOGGED_USER_IN_STORE = 'users/SET_LOGGED_USER',
}

export function getUsers(): IgetUsers {
  return {
    type: types.GET_USERS,
  };
}

export function setUsersInStore(payload: IUser[]): IsetUsersInStore {
  return {
    type: types.SET_USERSINSTORE,
    payload,
  };
}
export function getLoggedUser(email: string): IGetLoggedUser {
  return {
    type: types.GET_LOGGED_USER,
    payload: email,
  };
}

export function setLoggedUserInStore(userInfo: IUser): ISetLoggedUser {
  return { type: types.SET_LOGGED_USER_IN_STORE, payload: userInfo };
}
