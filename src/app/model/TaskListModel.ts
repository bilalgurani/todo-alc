export interface TaskListModel {
  itemId: string;
  taskName:string;
  taskDescription:string;
  dueDate: Date;
  createdOn: Date;
  isCompleted: boolean;
  tags: string[];
  completedOn: Date;
}

export interface TaskListAPIResponse {
  message: string;
  result: string;
  data: any;
}
