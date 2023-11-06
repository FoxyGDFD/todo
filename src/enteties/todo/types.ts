export type Todo = {
  readonly id: string;
  name: string;
  isCompleted: boolean;
};

export type State = {
  todos: Todo[];
  filter: Filters;
};

export enum Filters {
  ALL,
  ACTIVE,
  COMPLETED
}

export enum ActionTypes {
  ADD,
  REMOVE,
  UPDATE,
  FILTER
}

export type Action = {
  type: ActionTypes;
  payload?: Partial<Todo>;
  filter?: Filters;
};
