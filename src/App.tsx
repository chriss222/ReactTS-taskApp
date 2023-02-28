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

export type initialStateType = {
  inputTask: string;
  taskList: TaskModel[];
};

const initialState: initialStateType = {
  inputTask: "",
  taskList: []
};

const TaskReducer = (state: initialStateType, action: Actions) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        taskList: [
          ...state.taskList,
          { id: Date.now(), task: action.payload, isDone: false }
        ]
      };
    default:
      return state;
  }
};

export default function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // const addTask = (e: React.SyntheticEvent) => {
  //   e.preventDefault();

  //   if (task) {
  //     setTasks([...tasks, { id: Date.now(), task, isDone: false }]);
  //     setTask("");
  //   }
  // };
  console.log(state);

  return (
    <div className="App">
      <span className="heading">Task List</span>
      <InputField
        state={state}
        task={task}
        setTask={setTask}
        dispatch={dispatch}
      />
      <TaskList state={state} setTasks={setTasks} dispatch={dispatch} />
    </div>
  );
}
