import { TodosContext } from '@entities/todo/context';
import { Filters, Todo } from '@entities/todo/types';
import { Reducer, useContext, useEffect, useState } from 'react';

const filterReducer: Reducer<Todo[], Filters> = (state, filter): Todo[] => {
  switch (filter) {
    case Filters.ALL:
      return state;
    case Filters.ACTIVE:
      return state.filter(({ isCompleted }) => !isCompleted);
    case Filters.COMPLETED:
      return state.filter(({ isCompleted }) => isCompleted);
  }
};

const useFilterTodo = () => {
  const { filter, todos } = useContext(TodosContext);

  const [state, setState] = useState<Todo[]>(todos);

  useEffect(() => setState(filterReducer(todos, filter)), [todos, filter]);

  return state;
};

export default useFilterTodo;
