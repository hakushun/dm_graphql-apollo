export enum TodoStatus {
  NEW,
  IN_PROGRESS,
  COMPLETE,
}

export type Todo = {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
  createdAt: Date;
  updatedAt: Date;
};
