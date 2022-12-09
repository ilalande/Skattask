import STaskSelectedData from './style';
import Image from 'next/image';
import GiveButton from '../GiveButton';
import { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useSelector, useDispatch } from 'react-redux';
import { save } from '../../redux/actions/tasks.action';
import { editDTask, editStatusTask } from '../../redux/actions/task.action';
import { IRootState } from '@redux/reducers';
export default function TaskSelectedData(): JSX.Element {
  const dispatch = useDispatch();

  // Pour récupérer la tache sélectionnée dans le store Redux. Celle ci a été enregistrée dans task à partir du composant SideBar" à la sélection de la tâche
  const selectedTask = useSelector((state: IRootState) => state.task);
  const idTaskSelected = useSelector((state: IRootState) => state.task.taskId);
  //on ne montre pas le bouton save si l'utilisateur loggé est différent de l'utilisateur assigné
  const [displaySaveButton, setDisplaySaveButton] = useState(true);
  const loggedUserName = useSelector(
    (state: IRootState) => state.users.loggedUser.name
  );

  //On n'enlève le bouton save à l'affichage que si l'auteur dans la database est différent du user logué. On ne met pas la dépendance sur selectedTask.authorName sinon cela enleverait l'affichage dès que l'utilisateur choisi est différent du user logué (or on peut attribuer une tâche à quelqu'un d'autre et sauver)
  useEffect(() => {
    if (loggedUserName !== selectedTask.authorName && selectedTask.authorName) {
      setDisplaySaveButton(false);
    } else {
      setDisplaySaveButton(true);
    }
  }, [idTaskSelected, loggedUserName]);

  //pour enregistrer dans le store task les nouvelles valeurs de la tache sélectionnée si elles sont modifiées
  const saveTask = (e: any): void => {
    e.preventDefault();

    dispatch(
      save({
        taskId: selectedTask.taskId,
        authorId: selectedTask.authorId,
        date: selectedTask.date,
        title: selectedTask.title,
        ended: selectedTask.ended,
        description: selectedTask.description,
      })
    );
    //Si l'utilisateur logué n'est pas celui à qui la tâche est attribuée, on ne montre pas le bouton save
    if (loggedUserName !== selectedTask.authorName && selectedTask.authorName) {
      setDisplaySaveButton(false);
    } else {
      setDisplaySaveButton(true);
    }
  };

  const handleEnding = (): void => {
    dispatch(editStatusTask(!selectedTask.ended));
  };

  return (
    <STaskSelectedData>
      <div className='title'>
        <h1>{selectedTask.title}</h1>
        {!selectedTask.ended ? (
          <button
            type='submit'
            className='endManage endButton'
            onClick={() => handleEnding()}
          >
            <Image src='/end-shape.svg' width={20} height={25} alt='point' />
            <span>Marquer comme terminé</span>
          </button>
        ) : (
          <button
            type='submit'
            className='endManage endedButton'
            onClick={() => handleEnding()}
          >
            <span>Terminé</span>
          </button>
        )}
      </div>
      <div className='container'>
        <div className='buttonZone'>
          <GiveButton
            title='Attribuer à'
            type='user'
            image='/give-user.svg'
            userInStore={selectedTask.authorName}
          />
          <GiveButton title='Echéance' type='calendar' image='/due-time.svg' />
        </div>
        <div className='description'>
          <span className='titleDescr'>
            <Image src='/write-task.svg' width={25} height={25} alt='point' />{' '}
            <h2>Description</h2>
          </span>
          {/* Quand l'utilisateur entre une valeur dans le champ description, on change la valeur de description dans le store task */}

          <input
            value={selectedTask.description}
            onChange={(e) => dispatch(editDTask(e.target.value))}
          />
        </div>
        {/* Pour déplacer le bouton en version mobile */}
        <div className='wrapperMobile'>
          {!selectedTask.ended ? (
            <button
              type='submit'
              className='endManage endButtonMobile'
              onClick={() => handleEnding()}
            >
              <Image src='/end-shape.svg' width={20} height={25} alt='point' />
              <span>Marquer comme terminé</span>
            </button>
          ) : (
            <button
              type='submit'
              className='endManage endedButtonMobile'
              onClick={() => handleEnding()}
            >
              <span>Terminé</span>
            </button>
          )}
          <form onSubmit={saveTask}>
            <div
              className={
                displaySaveButton ? 'saveButton' : 'saveButton hideSaveButton'
              }
            >
              <button type='submit'>
                <span>Enregistrer</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </STaskSelectedData>
  );
}
