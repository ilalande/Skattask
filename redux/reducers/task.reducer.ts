import { types as typesTasks } from '../actions/task.action';
import { ITask } from '../../custom-types/content-types';
import { TaskAction } from '../../custom-types/action-type/task.action-types';
const initialState: ITask = {
  taskId: null,
  title: null,
  ended: false,
  date: null,
  authorName: null,
  authorId: null,
};

function reducer(state = initialState, action: TaskAction) {
  switch (action.type) {
    case typesTasks.SELECTTASK:
      return {
        ...state,
        date: action.payload.date,
        taskId: action.payload.taskId,
        title: action.payload.title,
        description: action.payload.description,
        authorName: action.payload.authorName,
        authorId: action.payload.authorId,
        ended: action.payload.ended,
      };

    case typesTasks.EDITDESCRTASK:
      return {
        ...state,
        description: action.payload,
      };

    case typesTasks.EDITUSERTASK:
      return {
        ...state,
        authorId: action.payload.userId,
        authorName: action.payload.userName,
      };

    case typesTasks.EDITDATETASK:
      return {
        ...state,
        date: action.payload,
      };

    case typesTasks.EDITSTATUSTASK:
      return {
        ...state,
        ended: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
