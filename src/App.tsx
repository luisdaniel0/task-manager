import { useState } from "react";
import type { Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App;
