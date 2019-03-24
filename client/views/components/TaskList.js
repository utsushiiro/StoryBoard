import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";

const TaskList = props => {
  return (
    <ul>
      {props.tasks.map(task => {
        return <Task text={task.text} />;
      })}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array
};

export default TaskList;
