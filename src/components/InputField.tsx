import React, { useRef } from "react";
import "../styles.css";
import { Actions } from "../App";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  dispatch: React.Dispatch<Actions>;
}

const InputField = ({ task, setTask, dispatch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // console.log(task);

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
