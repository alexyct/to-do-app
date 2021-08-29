import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id)); // el stands for element
    // Out of my todo's, I filter out the ones that isn't equal to the one I'm clicking on 'el' to be remaining to-do's. Equivalent to deleting.
  };
  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id) {
        return {
          ...item, completed: !item.completed // the ! flips the true/false of item.completed
        }
      }
      return item;
    }))
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      {/* we have javascript code above that adds css class of completed if todo.completed is true */}
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
);
};

export default Todo;