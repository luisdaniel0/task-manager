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
  //Q's
    do all forms require a state? i had issues with identifying what kind of states i 
  needed and got confused because i had a state for a list of tasks and also a state for 
  individual tasks and it confused me. 


  */

  function handleSubmit(task) {}
  return (
    <>
      <h2>Task Manager</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:{" "}
          <input
            type="text"
            onChange={(e) => {
              setTask({ ...task, name: e.target.value });
            }}
            value={task.name}
          />
        </label>
        <label>
          Details:{" "}
          <textarea
            onChange={(e) => {
              setTask({ ...task, details: e.target.value });
            }}
            value={task.details}
          ></textarea>
        </label>
        <label>
          Priority:
          <select
            name="priority"
            id="prio"
            onChange={(e) => {
              if (
                e.target.value === "Low" ||
                e.target.value === "Medium" ||
                e.target.value === "High"
              ) {
                setTask({ ...task, priority: e.target.value as Priority });
              }
            }}
            value={task.priority}
          >
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
