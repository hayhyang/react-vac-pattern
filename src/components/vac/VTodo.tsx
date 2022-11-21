import { ChangeEventHandler, MouseEventHandler, ReactElement } from "react";

interface VTodoProps {
  id?: any;
  value?: string;
  checked?: boolean;
  onCheck?: ChangeEventHandler;
  onRemove?: MouseEventHandler;
}

const VTodo = ({
  id,
  value,
  checked,
  onCheck,
  onRemove,
}: VTodoProps): ReactElement => {
  return (
    <li>
      <input type="checkbox" id={id} checked={checked} onChange={onCheck} />
      <label htmlFor={id}>{value}</label>
      <button type="button" onClick={onRemove}>
        Remove
      </button>
    </li>
  );
};

export default VTodo;
