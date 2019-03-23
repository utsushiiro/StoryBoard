import React from "react";
import TodoList from "./containers/TodoList";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList />
      </div>
    );
  }
}
