import React from "react";
import TaskModel from "../model";
import "../styles.css";
import Task from "./Task";

interface Props {
  tasks: TaskModel[];
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
}

const TaskList = ({ tasks, setTasks }: Props) => {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <Task task={task} key={task.id} tasks={tasks} setTasks={setTasks} />
        );
      })}
    </div>
  );
};

export default TaskList;
