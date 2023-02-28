import React, { useRef } from "react";
import "../styles.css";
import { Actions } from "../App";
import TaskModel from "../model";
import { initialStateType } from "../App";

interface Props {
  // task: string;
  // setTask: React.Dispatch<React.SetStateAction<string>>;
  dispatch: React.Dispatch<Actions>;
  state: initialStateType;
}

const InputField = ({ dispatch, state }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "add", payload: state.inputTask });
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={state.inputTask}
        onChange={(e) =>
          dispatch({ type: "enterTask", payload: e.target.value })
        }
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
