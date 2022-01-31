import React from "react";
import "./TodoItem.css";

const TodoItem = () => {
  return (
    <div className="todoItem">
      <input className="todoItem_input" type="checkbox" />
      <p className="todoItem_text">Placeholder text here</p>
    </div>
  );
};

export default TodoItem;
