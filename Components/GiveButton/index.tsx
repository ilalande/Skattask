import SGiveButton from './style';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSelector, useDispatch } from 'react-redux';
import { editUTask, editDateTask } from '../../redux/actions/task.action';
import { IRootState } from '@redux/reducers';
import { getUsers } from '../../redux/actions/users.action';
interface IGiveButtonProps {
  title: string;
  type: string;
  image: string;
  userInStore?: string | null;
}

export default function GiveButton({
  title,
  type,
  image,
  userInStore,
}: IGiveButtonProps): JSX.Element {
  //pour gérer la visibilité de la liste des users depuis le bouton "attribuer à"
  const [show, setShow] = useState<boolean>(false);

  const dispatch = useDispatch();

  // Pour récupérer la tache sélectionnée dans le store Redux
  const selectedTask = useSelector((state: IRootState) => state.task);

  //On utilise les deux : dateInStore qui est au format string pour l'affichage et dateEntered au format date pour le composant calendar
  const dateInStore = selectedTask.date;

  const [dateEntered, setDateEntered] = useState<Date | null>(null);

  // POur générer la liste des users dans le store à la génération du cposant, à partir de la BDD
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  // NB :  "dispatch" est ajouté dans le tableau du useEffetAdding pour supprimer un message warning au build.
  // Solution found in this post :  https://react-redux.js.org/api/hooks#usedispatch

  // Pour récupérer la liste des users dans le store Redux
  const users = useSelector((state: IRootState) => state.users.allUsers);
  // Quand l'utilisateur entre une valeur dans 'attribuer à', on change la valeur de user dans le reducer task

  const handleUser = (userId: string, userName: string) => {
    dispatch(editUTask({ userId, userName }));
    //bonne syntaxe lorsqu'un état dépend d'un état précédent
    setShow((previousshow) => {
      return !previousshow;
    });
  };
  // Quand l'utilisateur entre une valeur dans 'échéance', on change la valeur de date dans le reducer task
  const handleDate = (e: any) => {
    const dateInString = e.toLocaleString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    dispatch(editDateTask(dateInString));
    //bonne syntaxe lorsqu'un état dépend d'un état précédent
    setShow((previousshow) => {
      return !previousshow;
    });
    setDateEntered(e);
  };

  return (
    <SGiveButton>
      {type === 'user' ? (
        <>
          <button
            type='button'
            onClick={(e) => setShow(!show)}
            className='give'
          >
            <Image src={image} width={35} height={35} alt='point' />
            <span>{userInStore ? userInStore : title}</span>
          </button>

          <ul className={`list ${show ? 'shown' : 'hidden'}`}>
            {users.map((user, index) => {
              return (
                <li
                  data-testid={`userList-${index}`}
                  key={index}
                  className='optionUser'
                  onClick={() => handleUser(user.id, user.name)}
                >
                  {user.name}
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <>
          <button
            type='button'
            onClick={(e) => {
              setShow((previousshow) => {
                return !previousshow;
              });
            }}
            className='give'
          >
            <Image src={image} width={35} height={35} alt='point' />{' '}
            <span>{dateInStore ? dateInStore : title}</span>
          </button>
          <div className={`list ${show ? 'shown' : 'hidden'}`}>
            <Calendar
              className='calendar'
              value={dateEntered}
              onChange={(e: any) => handleDate(e)}
            />
          </div>
        </>
      )}
    </SGiveButton>
  );
}
