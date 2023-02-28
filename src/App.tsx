import React, { SyntheticEvent, useState, useReducer } from "react";
import "./styles.css";
import InputField from "./components/InputField";
import Task from "./model";
import TaskList from "./components/TaskList";
import TaskModel from "./model";

export type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number }
  | { type: "edit"; payload: { id: number; task: string } };

const TaskReducer = (state: TaskModel[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), task: action.payload, isDone: false }
      ];
    case "remove":
      return state.filter((task) => task.id !== action.payload);
    case "done":
      return state.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    case "edit":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, task: action.payload.task }
          : task
      );
    default:
      return state;
  }
};

export default function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [state, dispatch] = useReducer(TaskReducer, []);

  // const addTask = (e: React.SyntheticEvent) => {
  //   e.preventDefault();

  //   if (task) {
  //     setTasks([...tasks, { id: Date.now(), task, isDone: false }]);
  //     setTask("");
  //   }
  // };

  return (
    <div className="App">
      <span className="heading">Task List</span>
      <InputField task={task} setTask={setTask} dispatch={dispatch} />
      <TaskList state={state} setTasks={setTasks} dispatch={dispatch} />
    </div>
  );
}
