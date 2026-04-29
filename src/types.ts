export interface Task {
  id: string;
  name: string;
  details?: string;
  status: Status;
  priority: Priority;
  date: string;
}

export type Priority = "Low" | "Medium" | "High";
export type Status = "Not Started" | "In Progress" | "Completed";
