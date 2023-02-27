import React, { useRef } from "react";
import "../styles.css";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  addTask: (e: React.SyntheticEvent) => void;
}

const InputField = ({ task, setTask, addTask }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        addTask(e);
        inputRef.current?.blur();
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
