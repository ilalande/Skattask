import { types as typesTasks } from '../actions/tasks.action';
import { ITask } from '../../custom-types/content-types';
import { TasksAction } from '../../custom-types/action-type/tasks.action-types';

interface ITasksState {
  allTasks: ITask[];
}
const initialState: ITasksState = {
  allTasks: [],
};

function reducer(state = initialState, action: TasksAction) {
  switch (action.type) {
    case typesTasks.NEWINSTORE:
      let newAllTasks = [...state.allTasks, action.payload];
      return {
        ...state,
        allTasks: newAllTasks,
      };

    case typesTasks.SAVEINSTORE:
      let saveNewAllTasks: ITask[] = [];
      state.allTasks.map((task) => {
        //le but est de garder au maximum l'intégrité du state. On récréé donc un nouveau tableau (saveNewAllTasks) avec toutes les anciennes tâches et la nouvelle tâche modifiée.
        // Pour créer ce tableau : On passe en revue toutes les task de allTasks. Si c'est l'id de la tache modifiée, on met dans le nouveau tableau la nouvelle valeur de la tâche issue du payload. Sinon on reprend la tache de allTasks
        if (action.payload.taskId !== task.taskId) {
          saveNewAllTasks.push(task);
        } else {
          saveNewAllTasks.push(action.payload);
        }
      });
      return {
        ...state,
        allTasks: saveNewAllTasks,
      };
    //Action appelée depuis la saga tasks
    //Elle sert à afficher les taches générés par l'appel API de requests/
    case typesTasks.SETINSTORE:
      let newTasksBegin = action.payload;
      return {
        ...state,
        allTasks: newTasksBegin,
      };

    default:
      return state;
  }
}

export default reducer;
