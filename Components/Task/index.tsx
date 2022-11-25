import STask from './style';
import Image from 'next/image';

interface TaskProps {
  title: string | null;
  userName?: string | null;
  date?: string | null;
  ended: boolean | null;
}

export default function Task({
  title,
  userName,
  date,
  ended,
}: TaskProps): JSX.Element {
  return (
    <STask>
      <div
        data-testid='divWrap'
        className={ended ? 'taskTextEnded' : 'taskText'}
      >
        <Image
          src={ended ? '/circle-task-ended.svg' : '/circle-task.svg'}
          width={45}
          height={45}
          alt='point'
        />

        <div className='mainInfo'>
          <h4> {title}</h4>
          <p data-testid='userName' className='userName'>
            {' '}
            {userName}
          </p>
        </div>
      </div>
      <p data-testid='date' className='date'>
        {date}
      </p>
    </STask>
  );
}
