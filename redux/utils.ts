import { ITask, ITaskFromDb } from '../custom-types/content-types';

export function manageTasksDatas(dataFromDb: ITaskFromDb[]): ITask[] {
  const newTaskData: ITask[] = [];
  dataFromDb.map((task) => {
    if (task.author) {
      newTaskData.push({
        date: task.date,
        taskId: task.taskId,
        authorName: task.author.name,
        authorId: task.author.id,
        title: task.title,
        ended: task.ended,
        description: task.description,
      });
    } else {
      newTaskData.push({
        date: task.date,
        taskId: task.taskId,
        authorName: '',
        authorId: '',
        title: task.title,
        ended: task.ended,
        description: task.description,
      });
    }
  });
  return newTaskData;
}

export function manageSingleTaskDatas(dataFromDb: ITaskFromDb): ITask {
  if (dataFromDb.author) {
    const newSingleTaskData: ITask = {
      date: dataFromDb.date,
      taskId: dataFromDb.taskId,
      authorName: dataFromDb.author.name,
      authorId: dataFromDb.author.id,
      title: dataFromDb.title,
      ended: dataFromDb.ended,
      description: dataFromDb.description,
    };
    return newSingleTaskData;
  } else {
    const newSingleTaskData: ITask = {
      date: dataFromDb.date,
      taskId: dataFromDb.taskId,
      authorName: '',
      authorId: '',
      title: dataFromDb.title,
      ended: dataFromDb.ended,
      description: dataFromDb.description,
    };
    return newSingleTaskData;
  }
}
