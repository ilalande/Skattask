import { ITask } from '../../custom-types/content-types';
import {
  IselectTask,
  IeditDTask,
  IeditUTask,
  IeditDateTask,
  IeditStatusTask,
} from '../../custom-types/action-type/task.action-types';
export enum types {
  SELECTTASK = 'task/SELECTTASK',
  EDITDESCRTASK = 'task/EDITDESCRTASK',
  EDITUSERTASK = 'task/EDITUSERTASK',
  EDITDATETASK = 'task/EDITDATETASK',
  EDITSTATUSTASK = 'task/EDITSTATUSTASK',
}

export function selectTask(payload: ITask): IselectTask {
  return {
    type: types.SELECTTASK,
    payload,
  };
}

export function editDTask(payload: string): IeditDTask {
  return {
    type: types.EDITDESCRTASK,
    payload,
  };
}

export function editUTask(payload: {
  userId: string;
  userName: string;
}): IeditUTask {
  return {
    type: types.EDITUSERTASK,
    payload,
  };
}

export function editDateTask(payload: Date | string): IeditDateTask {
  return {
    type: types.EDITDATETASK,
    payload,
  };
}

export function editStatusTask(payload: boolean): IeditStatusTask {
  return {
    type: types.EDITSTATUSTASK,
    payload,
  };
}
