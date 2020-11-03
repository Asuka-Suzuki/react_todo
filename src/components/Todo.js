import React from "react";

const Todo = (todos, handleRemoveTask, handleChangeCompleted) => {
  return (
    <ul className="todos">
      {todos.map((todo, index) => (
        <li
          className="todo"
          key={index}
          // completed={completed}
          onChange={handleChangeCompleted}
        >
          <input
            className="todo-checkbox"
            type="checkbox"
            // checked={completed}
          />
          {todo.task}
          <span
            className="todo-delete-button"
            onClick={() => handleRemoveTask(index)}
          >
            ✕
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
