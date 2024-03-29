import SSideBar from './style';
import AddTaskForm from 'Components/AddTaskForm';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from '../../redux/actions/tasks.action';
import { selectTask } from '../../redux/actions/task.action';
import { ITask } from 'custom-types/content-types';
import { IRootState } from '../../redux/reducers/index';
import TaskGallery from 'Components/TaskGallery';
export default function SideBar(): JSX.Element {
  //pour gérer la classe de la tâche sélectionnée
  const [activeId, setActiveId] = useState<number | null>(null);

  const dispatch = useDispatch();

  // POur générer la liste des taches dans le store à partir de la base de données (et de l'aPI)
  //GETTASKS appelle l'action setTasksInSTore grace à une saga
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  // Pour récupérer les taches dans le store Redux
  const tasks = useSelector((state: IRootState) => state.tasks.allTasks);

  //fonction pour compter le nombre de taches terminées
  const count = () => {
    let counter: number = 0;
    tasks.forEach((task: ITask) => {
      if (task.ended) {
        counter += 1;
      }
    });
    return counter;
  };

  //fonction pour écrire dans le reducer task les données de la tache sélectionnée si sélection d'une tâche
  const select = (task: ITask) => {
    setActiveId(task.taskId);
    dispatch(selectTask(task));
  };

  return (
    <SSideBar>
      <AddTaskForm />
      <div className='WrapperTasks'>
        <h2>Toutes les tâches</h2>
        <TaskGallery
          tasks={tasks.filter((task: ITask) => !task.ended)}
          select={select}
          activeId={activeId}
        />
      </div>
      <div className='WrapperTasksEnded'>
        <div className='titleEnded'>
          <h3>Tâches terminées</h3>
          <span className='counter'>{count()}</span>
        </div>
        <TaskGallery
          tasks={tasks.filter((task: ITask) => task.ended)}
          select={select}
          activeId={activeId}
        />
      </div>
    </SSideBar>
  );
}
