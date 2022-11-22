import Todo from "./Todo";

export default class Todos {
  readonly todos: Todo[] = [];
  constructor({ todos = [] }: { todos: Todo[] }) {
    this.todos = todos;
  }
  addTodo(value: string) {}
  checkTodo({ id, checked }: { id: string; checked: boolean }) {}
  removeTodo(id: number) {}
}
