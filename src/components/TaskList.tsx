import React from "react";
import TaskModel from "../model";
import "../styles.css";
import Task from "./Task";
import { Actions } from "../App";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
  dispatch: React.Dispatch<Actions>;
  state: TaskModel[];
}

const TaskList = ({ setTasks, dispatch, state }: Props) => {
  return (
    <div className="tasks">
      {state.map((task) => {
        return (
          <Task
            task={task}
            key={task.id}
            state={state}
            setTasks={setTasks}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
