export interface IAddTaskPayload {
  date?: string;
  authorName?: string;
  authorId?: string;
  title: string;
  ended: boolean;
  description?: string;
}
export interface IAddTaskPayloadWithId {
  taskId: number;
  date?: string;
  authorId?: string;
  title: string;
  ended: boolean;
  description?: string;
}
export interface IUpdateTaskPayload {
  taskId: number;
  date?: string;
  authorName?: string;
  authorId?: string;
  title: string;
  ended: boolean;
  description?: string;
}
