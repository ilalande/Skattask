import SBurgerMobileMenu from './style';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, newTasks } from '../../redux/actions/tasks.action';
import { selectTask } from '../../redux/actions/task.action';
import { ITask } from 'custom-types/content-types';
import { IRootState } from '../../redux/reducers/index';
import TaskGallery from 'Components/TaskGallery';
export default function BurgerMobileMenu(): JSX.Element {
  //pour récupérer le texte de la tache entré dans le input
  const [titleTaskEntered, setTitleTaskEntered] = useState<string>('');

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
  //fonction pour gérer l'ajout de tache depuis le input entré par l'utilisateur
  const addTask = (e: any) => {
    e.preventDefault();
    const body = {
      date: '',
      authorName: '',
      authorId: '',
      title: titleTaskEntered,
      ended: false,
      description: '',
    };

    dispatch(newTasks(body));
    setTitleTaskEntered('');
  };

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
    <SBurgerMobileMenu>
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
    </SBurgerMobileMenu>
  );
}
