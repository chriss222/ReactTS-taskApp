import React, { useState } from "react";
import TaskModel from "../model";
import "../styles.css";
import {
  AiTwotoneEdit,
  AiTwotoneDelete,
  AiOutlineFileDone
} from "react-icons/ai";

interface Props {
  task: TaskModel;
  tasks: TaskModel[];
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
  key: number;
}

const Task = ({ task, key, tasks, setTasks }: Props) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const edit = (id: number) => {
    console.log(task);
    return null;
  };

  const remove = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const done = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <form className="task">
      {task.isDone ? (
        <s className="task-text">{task.task}</s>
      ) : (
        <span className="task-text">{task.task}</span>
      )}
      <div className="icons">
        <span className="icon" onClick={() => edit(task.id)}>
          <AiTwotoneEdit />
        </span>
        <span className="icon" onClick={() => remove(task.id)}>
          <AiTwotoneDelete />
        </span>
        <span className="icon" onClick={() => done(task.id)}>
          <AiOutlineFileDone />
        </span>
      </div>
    </form>
  );
};

export default Task;
