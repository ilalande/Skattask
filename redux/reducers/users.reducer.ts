import { types as typesUSers } from '../actions/users.action';
import { IUser } from '../../custom-types/content-types';
import { UserAction } from '../../custom-types/action-type/users.action-types';

interface IUsersState {
  allUsers: IUser[];
  loggedUser: IUser | null;
}

const initialState: IUsersState = {
  allUsers: [],
  loggedUser: null,
};

function reducer(state = initialState, action: UserAction) {
  switch (action.type) {
    //L'action new est appelée depuis la saga users
    //Elle sert à afficher les utilisateurs générés par l'appel API de requests/
    case typesUSers.SET_USERSINSTORE:
      let newAllUsers = action.payload;
      return {
        ...state,
        allUsers: newAllUsers,
      };
    case typesUSers.SET_LOGGED_USER_IN_STORE:
      return {
        ...state,
        loggedUser: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
