import React from "react";
import "./css/Form.css";

const Form = (props, handleNewTask, handleSubmit) => {
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
