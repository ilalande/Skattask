import { combineReducers } from 'redux';
import tasks from './tasks.reducer';
import task from './task.reducer';
import users from './users.reducer';
import { ITask, IUser } from '../../custom-types/content-types';
import { IUserFromGit } from '../../custom-types/content-types';
export default combineReducers({
  tasks,
  task,
  users,
});

export type IRootState = {
  tasks: {
    allTasks: ITask[];
  };
  task: ITask;
  users: { allUsers: IUser[]; loggedUser: IUserFromGit };
};
