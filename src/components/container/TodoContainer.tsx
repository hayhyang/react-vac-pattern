import { ReactElement } from "react";

import useTodoList from "hooks/useTodoList";
import TodoInput from "components/mocules/TodoInput";
import TodoList from "components/mocules/TodoList";

const TodoContainer = (): ReactElement => {
  // Business Logic
  const [list, { addTodo, checkTodo, removeTodo, selectModel }] =
    useTodoList("userA");

  // TodoInput Props Object
  const todoInputProps = {
    handleSubmit: addTodo,
  };

  // TodoList Props Object
  const todoListProps = {
    list,
    checkTodo,
    removeTodo,
  };

  return (
    <div>
      <h1>Todo List</h1>

      <h3>Select Todo Data</h3>

      <h3>View Components</h3>
      <TodoInput {...todoInputProps} />
      <TodoList {...todoListProps} />
    </div>
  );
};

export default TodoContainer;
