import { useSelector } from 'react-redux';
import SMainDefault from './style';
import { IRootState } from '@redux/reducers';
export default function MainDefault(): JSX.Element {
  const selectLoggedUser = useSelector(
    (state: IRootState) => state.users.loggedUser
  );
  return (
    <SMainDefault>
      {selectLoggedUser && (
        <>
          <h1>
            Bienvenue sur Todoist {selectLoggedUser.name} - selectionnez une
            tâche
          </h1>
        </>
      )}
    </SMainDefault>
  );
}
