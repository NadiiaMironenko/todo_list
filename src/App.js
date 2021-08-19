import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() => {
filterHandler()
  },[todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncomplited":
        setfilteredTodos(todos.filter((todo) => todo.complited === false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Your ToDo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
