import SMain from './style';
import { useSelector } from 'react-redux';
import MainDefault from '../MainDefault';
import TaskSelectedData from '../TaskSelectedData';
import { IRootState } from '../../redux/reducers/index';

export default function Main(): JSX.Element {
  // Pour récupérer la tache sélectionnée dans le store Redux
  const selectedTask = useSelector((state: IRootState) => state.task);

  return (
    <SMain>
      {selectedTask.taskId === null ? <MainDefault /> : <TaskSelectedData />}
    </SMain>
  );
}
