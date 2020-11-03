import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./css/TodoList.css";
import Form from "./Form";
import Todo from "./Todo";

const TodoList = () => {
  const initialState = [
    {
      task: "メールの確認",
    },
    {
      task: "サーバーの契約",
    },
    {
      task: "お問い合わせ機能の作成",
    },
  ];

  const [todos, setTodo] = useState(initialState);

  const [task, setTask] = useState("");

  const handleNewTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") {
      return;
    }

    const newTodo = {
      task: task,
      completed: false,
    };

    // props.setTodo((todos) => [...todos, { props.task, completed: false }]);
    // setTodos
    setTodo([...todos, newTodo]);

    setTask("");
  };

  const handleRemoveTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  const handleChangeCompleted = () => {
    // console.log();
  };

  return (
    <div className="container">
      <h1 className="title">Example Todo</h1>
      <ul className="tools">
        <li className="tool">
          <FontAwesomeIcon className="delete-all-icon" icon={faTrashAlt} />
        </li>
      </ul>
      <div className="todo-list">
        <Form
          task={task}
          handleNewTask={handleNewTask}
          handleSubmit={handleSubmit}
        />
        <Todo
          todos={todos}
          handleRemoveTask={handleRemoveTask}
          handleChangeCompleted={handleChangeCompleted}
        />
      </div>
    </div>
  );
};

export default TodoList;
