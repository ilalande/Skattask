import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import Router from 'next/router';
import { put, all, takeLatest, call } from 'redux-saga/effects';
import { types as typesUsers } from '../actions/users.action';
import { setUsersInStore, setLoggedUserInStore } from '../actions/users.action';
import {
  getUsersFromApi,
  getLoggedUserByMailFromApi,
} from '../../requests/users';
import { IUser } from '../../custom-types/content-types';
import { IGetLoggedUser } from '../../custom-types/action-type/users.action-types';

//Pour récupérer les users de la bdd et les mettre dans le store
export function* getUSersSaga() {
  try {
    const res: AxiosResponse | undefined = yield call(getUsersFromApi);
    if (res) {
      const dataUsersFromApi: IUser[] = res.data;
      yield put(setUsersInStore(dataUsersFromApi));
    }
  } catch (error: any) {
    return toast(error.response.data.message);
  }
}
//Saga qui permet d'envoyer les éléments du user dans le state
function* getLoggedUserSaga(action: IGetLoggedUser) {
  const email = action.payload;
  try {
    if (action.payload) {
      const res: AxiosResponse | undefined = yield call(
        getLoggedUserByMailFromApi,
        email
      );
      if (res) {
        const dataLoggedUser: IUser = res.data;
        yield put(setLoggedUserInStore(dataLoggedUser));
      }
    } else {
      toast("Vous n'êtes pas connecté");
      //a priori ce routeur ne fonctionne pas, c'est géré dans la page home et login
      yield Router.push(`/login`);
    }
  } catch (error) {
    return toast('il y a un problème de connexion');
  }
}

export function* watchUsersSagas() {
  yield all([takeLatest(typesUsers.GET_LOGGED_USER, getLoggedUserSaga)]);
  yield all([takeLatest(typesUsers.GET_USERS, getUSersSaga)]);
}
