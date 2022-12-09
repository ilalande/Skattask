import SAddTaskForm from './style';
import { useState } from 'react';
import { newTasks } from '../../redux/actions/tasks.action';
import { useSelector, useDispatch } from 'react-redux';

export default function AddTaskForm(): JSX.Element {
  //pour récupérer le texte de la tache entré dans le input
  const [titleTaskEntered, setTitleTaskEntered] = useState<string>('');

  const dispatch = useDispatch();
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

  return (
    <SAddTaskForm>
      <form onSubmit={addTask}>
        <input
          placeholder='+ ajouter une tâche'
          type='text'
          id='newTask'
          className='newTask'
          value={titleTaskEntered}
          onChange={(e) => setTitleTaskEntered(e.target.value)}
        />
      </form>
    </SAddTaskForm>
  );
}
