import React, { SyntheticEvent, useState } from "react";
import "./styles.css";
import InputField from "./components/InputField";
import Task from "./model";
import TaskList from "./components/TaskList";

export default function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, { id: Date.now(), task, isDone: false }]);
      setTask("");
    }
  };

  console.log(tasks);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField task={task} setTask={setTask} addTask={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
