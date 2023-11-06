import { Dispatch, Reducer, createContext } from 'react';
import { v4 } from 'uuid';
import { Action, ActionTypes, Filters, State, Todo } from './types';

export const initState: State = { filter: Filters.ALL, todos: [] };

export const TodosContext = createContext<State>(initState);
export const DispatchContext = createContext<Dispatch<Action>>(() => '');

export const todosReducer: Reducer<State, Action> = (state, action): State => {
  switch (action.type) {
    case ActionTypes.ADD:
      return {
        ...state,
        todos: [...state.todos, { id: v4(), ...action.payload } as Todo]
      };
    case ActionTypes.REMOVE:
      return {
        ...state,
        todos: state.todos.filter(({ id }: Todo) => action.payload?.id !== id)
      };
    case ActionTypes.UPDATE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload?.id)
            return Object.assign(todo, action.payload);
          return todo;
        })
      };
    case ActionTypes.FILTER:
      return { ...state, filter: action.filter as Filters };
    default:
      throw new Error(`Unexpected action type ${action.type as string}`);
  }
};
