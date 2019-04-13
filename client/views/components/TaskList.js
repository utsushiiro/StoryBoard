import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";

const TaskList = props => {
  return (
    <>
    {props.tasks.map(task => {
        return <Task {...task} />;
    })}
    </>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array
};

export default TaskList;
