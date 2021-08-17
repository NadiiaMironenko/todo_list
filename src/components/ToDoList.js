import React from "react"
import Todo from "./Todo"

const ToDo = () => {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          <Todo/>
        </ul>
      </div>
    );
}

export default ToDo;