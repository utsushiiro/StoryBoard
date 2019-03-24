import React from "react";
import TaskList from "./containers/TaskList";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>StoryBoard</h1>
        <TaskList />
      </div>
    );
  }
}
