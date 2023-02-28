import React, { useState, useRef, useEffect } from "react";
import TaskModel from "../model";
import "../styles.css";
import {
  AiTwotoneEdit,
  AiTwotoneDelete,
  AiOutlineFileDone
} from "react-icons/ai";
import { Actions } from "../App";
import { initialStateType } from "../App";

interface Props {
  task: TaskModel;
  state: initialStateType;
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
  key: number;
  dispatch: React.Dispatch<Actions>;
}

const Task = ({ task, key, state, setTasks, dispatch }: Props) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.task);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [editMode]);

  // const remove = (id: number) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

  // const done = (id: number) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, isDone: !task.isDone } : task
  //     )
  //   );
  // };

  const edit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    dispatch({ type: "edit", payload: { id: task.id, task: editTask } });
    setEditMode(false);
  };

  return (
    <form className="task" onSubmit={(e) => edit(e, task.id)}>
      {editMode && (
        <input
          ref={inputRef}
          className="task-edit-text"
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
        />
      )}
      {task.isDone && !editMode && <s className="task-text">{task.task}</s>}
      {!task.isDone && !editMode && (
        <span className="task-text">{task.task}</span>
      )}
      <div className="icons">
        <span
          className="icon"
          onClick={() => {
            if (!task.isDone) {
              setEditMode(!editMode);
            }
          }}
        >
          <AiTwotoneEdit />
        </span>
        <span
          className="icon"
          onClick={() => dispatch({ type: "remove", payload: task.id })}
        >
          <AiTwotoneDelete />
        </span>
        <span
          className="icon"
          onClick={() => dispatch({ type: "done", payload: task.id })}
        >
          <AiOutlineFileDone />
        </span>
      </div>
    </form>
  );
};

export default Task;
