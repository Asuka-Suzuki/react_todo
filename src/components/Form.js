import React from "react";
import "./css/Form.css";

const Form = (props, handleNewTask, handleSubmit) => {
  // // const [task, setTask] = useState("");

  // const handleNewTask = (e) => {
  //   props.setTask(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (props.task === "") {
  //     return;
  //   }

  //   const newTodo = {
  //     task: props.task,
  //     completed: false,
  //   };

  //   // props.setTodo((todos) => [...todos, { props.task, completed: false }]);
  //   // setTodos
  //   props.setTodo([...props.todos, newTodo]);

  //   props.setTask("");
  // };

  return (
    <form className="todos-header" onSubmit={handleSubmit}>
      <input
        className="todos-header-input"
        type="text"
        // todo
        value={props.task}
        onChange={handleNewTask}
      />
      <input className="todos-header-plus" type="submit" value="＋" />
    </form>
  );
};

export default Form;
