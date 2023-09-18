import useTodoFilter from '@shared/store/todos/useTodoFilter.ts';
import { Todo } from '@widgets/ui/Todo/Todo.tsx';
import { useEffect, useState } from 'react';

const useFilterTodos = (todos: Todo[]) => {
  const { filter } = useTodoFilter();
  const [list, setList] = useState<Todo[]>(todos);

  useEffect(() => {
    switch (filter) {
      case 'active':
        return setList(todos.filter(({ isCompleted }) => !isCompleted));
      case 'completed':
        return setList(todos.filter(({ isCompleted }) => isCompleted));
      default:
        return setList(todos);
    }
  }, [filter, todos]);

  return list;
};

export default useFilterTodos;
