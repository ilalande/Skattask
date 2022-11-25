import { ITask, ITaskFromDb } from 'custom-types/content-types';
import {
  IAddTaskPayload,
  IUpdateTaskPayload,
  IAddTaskPayloadWithId,
} from 'custom-types/payload-types';
import axios from 'axios';

export const getTasksFromApi = async (): Promise<ITask[]> => {
  return axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/tasks`);
};

export const getTaskById = async (taskId: string): Promise<ITask[]> => {
  return axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/tasks/${taskId}`);
};

export const addTaskRequest = async (
  taskInfos: IAddTaskPayload
): Promise<IAddTaskPayloadWithId> => {
  return await axios.post(
    `${process.env.NEXT_PUBLIC_SERVER}/api/tasks`,
    taskInfos
  );
};
export const updateTaskRequest = async (
  taskInfos: ITask
): Promise<ITaskFromDb> => {
  return await axios.put(
    `${process.env.NEXT_PUBLIC_SERVER}/api/tasks/${taskInfos.taskId}`,
    taskInfos
  );
};
