import { SaveTasksInSToreAction } from '../../custom-types/action-type/tasks.action-types';
import { ITask, ITaskFromDb } from '../../custom-types/content-types';
import {
  NewTasksAction,
  NewTasksInStoreAction,
  GetTasksAction,
  SaveTasksAction,
  SetTasksInStoreAction,
} from '../../custom-types/action-type/tasks.action-types';
import {
  IAddTaskPayload,
  IUpdateTaskPayload,
  IAddTaskPayloadWithId,
} from 'custom-types/payload-types';

export enum types {
  NEW = 'tasks/NEW',
  NEWINSTORE = 'tasks/NEWINSTORE',
  GET = 'tasks/GET',
  SAVE = 'tasks/SAVE',
  SAVEINSTORE = 'tasks/SAVEINSTORE',
  SETINSTORE = 'tasks/SETINSTORE',
}

export function newTasks(payload: IAddTaskPayload): NewTasksAction {
  return {
    type: types.NEW,
    payload,
  };
}
export function setNewTaskInStore(
  payload: IAddTaskPayloadWithId
): NewTasksInStoreAction {
  return {
    type: types.NEWINSTORE,
    payload,
  };
}

export function getTasks(): GetTasksAction {
  return {
    type: types.GET,
  };
}

export function setTasksInStore(payload: ITask[]): SetTasksInStoreAction {
  return {
    type: types.SETINSTORE,
    payload,
  };
}

export function save(payload: ITask): SaveTasksAction {
  return {
    type: types.SAVE,
    payload,
  };
}

export function saveInStore(payload: ITask): SaveTasksInSToreAction {
  return {
    type: types.SAVEINSTORE,
    payload,
  };
}
