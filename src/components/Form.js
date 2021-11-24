import React from 'react';

const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value); // e stands for event, .target.value just give us a specific part of the event
    setInputText(e.target.value); // uses what's written in form to set inputText
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, // the ... basically spreads the todos, i.e. includes existing todo's in the set as array
      { text: inputText, completed: false, id: Math.random() * 1000 }, // might want to use uid package instead of math.random
    ]);
    setInputText('');
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        placeholder="What do you want to do?"
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="" disabled selected>
            Filter by:
          </option>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
