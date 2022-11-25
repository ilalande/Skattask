import SAddTaskForm from './style';

interface IAddTaskFormProps {
  placeholder: string;
  setTitleTaskEntered: (text: string) => void;
  titleTaskEntered: string;
  submitFunction: (e: any) => void;
}

export default function AddTaskForm({
  placeholder,
  setTitleTaskEntered,
  titleTaskEntered,
  submitFunction,
}: IAddTaskFormProps): JSX.Element {
  return (
    <SAddTaskForm>
      <form onSubmit={submitFunction}>
        <input
          placeholder={placeholder}
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
