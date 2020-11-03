import React from "react";

const Todo = (todos, handleRemoveTask, handleChangeCompleted) => {
  // const initialState = [
  //   {
  //     task: "メールの確認",
  //     // isCompleted: false,
  //   },
  //   {
  //     task: "サーバーの契約",
  //     // isCompleted: false,
  //   },
  //   {
  //     task: "お問い合わせ機能の作成",
  //     // isCompleted: false,
  //   },
  // ];

  // const [todos, setTodo] = useState(initialState);

  // const handleRemoveTask = (index) => {
  //   const newTodos = [...props.todos];
  //   newTodos.splice(index, 1);
  //   props.setTodo(newTodos);
  // };

  // const handleChangeCompleted = () => {
  //   console.log(props.completed);
  // };

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
