import React, { useRef } from "react";
import "../styles.css";
import { Actions } from "../App";
import TaskModel from "../model";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  dispatch: React.Dispatch<Actions>;
  state: TaskModel[];
}

const InputField = ({ task, setTask, dispatch, state }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "add", payload: task });
        inputRef.current?.blur();
        setTask("");
      }}
    >
      <input
        ref={inputRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="input"
        placeholder="Enter task"
        className="task-input"
      ></input>
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputField;
