import { useState } from "react";
import type { Task, Priority } from "./types";

type TaskState = Partial<Task>;

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<TaskState>({
    name: "",
    details: "",
    priority: undefined,
    date: "",
  });

  /*
  {
      id: string;
      name: string;
      details?: string;
      status: Status;
      priority: Priority;
      date: string;

      status is added once task is added, defaults to "Not Started"
      date is added on creation time when task is added
  }

  //Q's
    do all forms require a state? i had issues with identifying what kind of states i 
  needed and got confused because i had a state for a list of tasks and also a state for 
  individual tasks and it confused me. 


  */

  function addTask(task) {}
  return (
    <>
      <h2>Task Manager</h2>
      <form>
        <label>
          Title: <input type="text" />
        </label>
        <label>
          Details: <textarea></textarea>
        </label>
        <label>
          Priority:
          <select name="priority" id="prio">
            <option value="">--Please choose an option--</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button>Add</button>
      </form>
    </>
  );
}

export default App;
