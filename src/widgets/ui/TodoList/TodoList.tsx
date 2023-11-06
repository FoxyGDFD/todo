import useFilterTodo from '@features/hooks/useFilterTodo';
import TodoItem from '@widgets/ui/Todo/Todo';
import { FC } from 'react';
import { Box } from 'simplify-dev';
import { useListItemFocus } from 'simplify-dev/hooks';

const TodoList: FC = () => {
  const { listRef, onKeyDown } = useListItemFocus('todo-item');
  const todos = useFilterTodo();

  return (
    <Box
      className='mt-[15px] flex flex-col gap-[5px]'
      onKeyDown={onKeyDown}
      ref={listRef}
      role='todo-list'
      as='ul'
    >
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </Box>
  );
};

export default TodoList;
