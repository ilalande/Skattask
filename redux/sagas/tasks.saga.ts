import { put, all, takeLatest, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
//Le type pour une réponse axios
import { AxiosResponse } from 'axios';
import { types as typesTasks } from '../actions/tasks.action';
import {
  setTasksInStore,
  setNewTaskInStore,
  saveInStore,
} from '../actions/tasks.action';
import {
  getTasksFromApi,
  addTaskRequest,
  updateTaskRequest,
} from '../../requests/tasks';
import { ITaskFromDb } from '../../custom-types/content-types';
import {
  IAddTaskPayloadWithId,
  IUpdateTaskPayload,
} from '../../custom-types/payload-types';
import {
  NewTasksInStoreAction,
  SaveTasksInSToreAction,
} from '../../custom-types/action-type/tasks.action-types';
import { manageTasksDatas, manageSingleTaskDatas } from '@redux/utils';

export function* getTasksSaga() {
  try {
    // Doc sur ce qu'est une réponse axios : https://axios-http.com/fr/docs/res_schema
    const res: AxiosResponse | undefined = yield call(getTasksFromApi);

    if (res) {
      const dataTasksFromApi: ITaskFromDb[] = res.data;
      // manageTasksDatas est une fonction définie pour transformer les données issues de la db en un objet + simple avec uniquement les données utiles dans le store dans un simple objet tasks (la réponse de la requête avec table liée donne un objet complexe)
      yield put(setTasksInStore(manageTasksDatas(dataTasksFromApi)));
      yield toast('Bienvenue sur votre Dashboard');
    }
  } catch (error: any) {
    return toast(error.response.data.message);
  }
}

export function* addTaskSaga(action: NewTasksInStoreAction) {
  try {
    const res: AxiosResponse | undefined = yield call(
      addTaskRequest,
      action.payload
    );
    //pour mieux gérer le retour d'axios, notamment si la personne n'est pas connectée
    if (res) {
      const data: IAddTaskPayloadWithId = res.data;
      yield put(setNewTaskInStore(data));
      yield toast('Votre tâche a été ajoutée');
    }
  } catch (error: any) {
    return toast(error.response.data.message);
  }
}

export function* updateTaskSaga(action: SaveTasksInSToreAction) {
  try {
    const res: AxiosResponse | undefined = yield call(
      updateTaskRequest,
      action.payload
    );
    //pour mieux gérer le retour d'axios, notamment si la personne n'est pas connectée ou n'a pas le droit de modifier la tâche
    if (res) {
      const data: ITaskFromDb = res.data;
      yield put(saveInStore(manageSingleTaskDatas(data)));
      yield toast('Votre tâche a bien été modifiée');
    }
  } catch (error: any) {
    return toast(error.response.data.message);
  }
}

export function* watchTasksSagas() {
  yield all([takeLatest(typesTasks.GET, getTasksSaga)]);
  yield all([takeLatest(typesTasks.NEW, addTaskSaga)]);
  yield all([takeLatest(typesTasks.SAVE, updateTaskSaga)]);
}
