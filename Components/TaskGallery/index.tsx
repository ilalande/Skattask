import STaskGallery from './style';
import { ITask } from '@custom-types/content-types';
import Task from '../Task';
interface ITaskGallery {
  tasks: ITask[];
  select: (task: ITask) => void;
  activeId?: number | null;
}

export default function TaskGallery({
  tasks,
  select,
  activeId,
}: ITaskGallery): JSX.Element {
  return (
    <STaskGallery>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                select(task);
              }}
              className={activeId === task.taskId ? 'selectedTask' : 'taskList'}
            >
              <Task
                title={task.title}
                userName={task.authorName}
                date={task.date}
                ended={task.ended}
              />
            </li>
          );
        })}
      </ul>
    </STaskGallery>
  );
}
