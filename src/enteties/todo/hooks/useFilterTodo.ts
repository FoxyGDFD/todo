import { Reducer, useContext, useEffect, useState } from 'react';
import { TodosContext } from '../context';
import { Filters, Todo } from '../types';

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
