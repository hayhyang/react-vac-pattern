import { ReactElement } from "react";

import VTodo from "components/vac/VTodo";

interface TodoListProps {
  list: Array<{ id: number; value: string; checked: boolean }>;
  checkTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList = ({
  list,
  checkTodo,
  removeTodo,
}: TodoListProps): ReactElement => {
  const vTodoProps = (todo: {
    id: number;
    value: string;
    checked: boolean;
  }) => {
    return {
      key: todo.id,
      id: todo.id,
      value: todo.value,
      checked: todo.checked,
      onCheck: () => checkTodo(todo.id),
      onRemove: () => removeTodo(todo.id),
    };
  };
  return (
    <ul>
      {list.map((todo: { id: number; value: string; checked: boolean }) => (
        <VTodo {...vTodoProps(todo)} />
      ))}
    </ul>
  );
};

export default TodoList;
