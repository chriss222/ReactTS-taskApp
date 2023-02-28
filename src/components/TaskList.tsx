import React from "react";
import TaskModel from "../model";
import "../styles.css";
import Task from "./Task";
import { Actions } from "../App";
import { initialStateType } from "../App";

interface Props {
  // setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
  dispatch: React.Dispatch<Actions>;
  state: initialStateType;
}

const TaskList = ({ dispatch, state }: Props) => {
  return (
    <div className="tasks">
      {state.taskList.map((task) => {
        return (
          <Task
            task={task}
            key={task.id}
            state={state}
            // setTasks={setTasks}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
