import { FormEvent, useContext, useRef } from 'react';
import { DispatchContext } from '../context';
import { ActionTypes, Filters, Todo } from '../types';

export const useTodo = () => {
  const dispatch = useContext(DispatchContext);
  const ref = useRef<HTMLInputElement | null>(null);
  return {
    add: (e: FormEvent) => {
      e.preventDefault();
      if (ref.current?.value)
        dispatch({
          payload: { isCompleted: false, name: ref.current?.value },
          type: ActionTypes.ADD
        });
    },
    ref,
    remove: (id: string) =>
      dispatch({ payload: { id }, type: ActionTypes.REMOVE }),
    setFilter: (filter: Filters) =>
      dispatch({ filter, type: ActionTypes.FILTER }),
    update: (payload: Partial<Todo>) =>
      dispatch({ payload, type: ActionTypes.UPDATE })
  };
};
