import {
  DispatchContext,
  TodosContext,
  initState,
  todosReducer
} from '@entities/todo/context';
import { Action, State } from '@entities/todo/types';
import { FC, PropsWithChildren, Reducer, useReducer } from 'react';

const TodosProvider: FC<PropsWithChildren<{ init?: State }>> = ({
  children,
  init
}) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    todosReducer,
    init || initState
  );

  return (
    <DispatchContext.Provider value={dispatch}>
      <TodosContext.Provider value={state}>{children}</TodosContext.Provider>
    </DispatchContext.Provider>
  );
};

export default TodosProvider;
