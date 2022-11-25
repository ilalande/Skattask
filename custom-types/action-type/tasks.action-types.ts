import {
  IAddTaskPayload,
  IUpdateTaskPayload,
  IAddTaskPayloadWithId,
} from 'custom-types/payload-types';
import { ITask, ITaskFromDb } from '../content-types';
import { types } from '../../redux/actions/tasks.action';
interface INewTasks {
  type: types.NEW;
  payload: IAddTaskPayload;
}
interface INewTasksInStore {
  type: types.NEWINSTORE;
  payload: IAddTaskPayloadWithId;
}

interface IGetTasks {
  type: types.GET;
}

interface ISetStoreTasks {
  type: types.SETINSTORE;
  payload: ITask[];
}
interface ISaveTasks {
  type: types.SAVE;
  payload: ITask;
}

interface ISaveTasksInStore {
  type: types.SAVEINSTORE;
  payload: ITask;
}

export type NewTasksAction = INewTasks;
export type NewTasksInStoreAction = INewTasksInStore;
export type GetTasksAction = IGetTasks;
export type SaveTasksAction = ISaveTasks;
export type SaveTasksInSToreAction = ISaveTasksInStore;
export type SetTasksInStoreAction = ISetStoreTasks;
export type TasksAction =
  | INewTasks
  | ISaveTasksInStore
  | INewTasksInStore
  | ISetStoreTasks
  | IGetTasks
  | ISaveTasks;
