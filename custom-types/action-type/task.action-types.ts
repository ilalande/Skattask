import { ITask } from '../content-types';
import { types } from '../../redux/actions/task.action';

export interface IselectTask {
  type: types.SELECTTASK;
  payload: ITask;
}

export interface IeditDTask {
  type: types.EDITDESCRTASK;
  payload: string;
}
export interface IeditUTask {
  type: types.EDITUSERTASK;
  payload: {
    userId: string;
    userName: string;
  };
}

export interface IeditDateTask {
  type: types.EDITDATETASK;
  payload: Date | string;
}

export interface IeditStatusTask {
  type: types.EDITSTATUSTASK;
  payload: boolean;
}

export type TaskAction =
  | IselectTask
  | IeditDTask
  | IeditUTask
  | IeditDateTask
  | IeditStatusTask;
