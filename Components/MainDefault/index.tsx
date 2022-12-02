import { useSelector } from 'react-redux';
import SMainDefault from './style';
import { IRootState } from '@redux/reducers';
import AddTaskForm from 'Components/AddTaskForm';
export default function MainDefault(): JSX.Element {
  const selectLoggedUser = useSelector(
    (state: IRootState) => state.users.loggedUser
  );
  return (
    <SMainDefault>
      {selectLoggedUser && (
        <>
          <AddTaskForm />

          <h1>
            Bienvenue sur Todoist {selectLoggedUser.name} - selectionnez une
            tâche
          </h1>
        </>
      )}
    </SMainDefault>
  );
}
