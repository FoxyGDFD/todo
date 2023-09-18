import useTodoFilter from '@shared/store/todos/useTodoFilter.ts';
import useTodosStore from '@shared/store/todos/useTodosStore.ts';
import { FC } from 'react';
import { Box, Button } from 'simplify-dev';
import { TabList, TabListProvider } from 'simplify-dev/client-ui';

const TodoFilter: FC = () => {
  const { setFilter } = useTodoFilter();
  const { removeTodo, todos } = useTodosStore();

  const clearCompletedTodos = () => {
    todos.forEach(({ id, isCompleted }) => {
      if (isCompleted) removeTodo(id);
    });
  };

  return (
    <TabListProvider defaultIndex='all'>
      <Box className='mt-[20px] flex gap-[20px]'>
        <TabList selectedVariant='primary' className='flex  gap-[20px]'>
          <Button
            onClick={() => setFilter('all')}
            variant='secondary'
            buttonType='text'
            id='all'
          >
            All
          </Button>
          <Button
            onClick={() => setFilter('active')}
            variant='secondary'
            buttonType='text'
            id='active'
          >
            Active
          </Button>
          <Button
            onClick={() => setFilter('completed')}
            variant='secondary'
            buttonType='text'
            id='completed'
          >
            Completed
          </Button>
        </TabList>

        <Button
          onClick={clearCompletedTodos}
          variant='reject'
          buttonType='text'
          id='clear'
        >
          Clear Completed
        </Button>
      </Box>
    </TabListProvider>
  );
};

export default TodoFilter;
