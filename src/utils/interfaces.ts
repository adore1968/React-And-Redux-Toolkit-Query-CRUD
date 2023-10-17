export interface Task {
  id?: number;
  title: string;
  description: string;
  completed?: boolean;
}

export type Tasks = Task[];

export interface SetTaskPayload {
  name: string;
  value: string;
  checked?: boolean;
}
