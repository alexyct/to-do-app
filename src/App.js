import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // This function only runs once when app starts
  useEffect(() => {
    // get todo from local storage
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([])); // we need this step or else Todos will be null and that doesn't work
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }, []);

  // The function inside useEffect runs everytime todos or status changes
  useEffect(() => {
    // filterHandler
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
    // save to local
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>My To Do List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      {/* setInputText passed into the Form as props, and we can use Form.js to setInputText */}
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
