export default class Todo {
  readonly id;
  readonly value;
  readonly checked;
  constructor({
    id,
    value,
    checked,
  }: {
    id: number;
    value: string;
    checked: boolean;
  }) {
    this.id = id;
    this.value = value;
    this.checked = checked;
  }
}
