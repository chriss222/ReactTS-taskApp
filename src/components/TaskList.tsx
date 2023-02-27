import React from "react";
import TaskModel from "../model";
import "../styles.css";
import Task from "./Task";
import { Actions } from "../App";

interface Props {
  tasks: TaskModel[];
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
  dispatch: React.Dispatch<Actions>;
}

const TaskList = ({ tasks, setTasks, dispatch }: Props) => {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <Task
            task={task}
            key={task.id}
            tasks={tasks}
            setTasks={setTasks}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
