import useFilterTodos from '@features/useFilterTodos/useFilterTodos.ts';
import { Todo, default as TodoItem } from '@widgets/ui/Todo/Todo.tsx';
import { FC } from 'react';
import { Box } from 'simplify-dev';
import { useListItemFocus } from 'simplify-dev/hooks';

type TodoListProps = { todos: Todo[] };
const TodoList: FC<TodoListProps> = props => {
  const { todos } = props;
  const { listRef, onKeyDown } = useListItemFocus('todo-item');
  const list = useFilterTodos(todos);

  return (
    <Box
      className='mt-[15px] flex flex-col gap-[5px]'
      onKeyDown={onKeyDown}
      ref={listRef}
      role='todo-list'
      as='ul'
    >
      {list.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </Box>
  );
};

export default TodoList;
