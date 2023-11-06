import { TodosContext } from '@entities/todo/context';
import { Filters, Todo } from '@entities/todo/types';
import { useTodo } from '@features/hooks/useTodo';
import { FC, useContext } from 'react';
import { Box, Button } from 'simplify-dev';
import { TabList, TabListProvider } from 'simplify-dev/client-ui';

const TodoFilter: FC = () => {
  const { remove, setFilter } = useTodo();

  const { todos } = useContext(TodosContext);

  const clearCompletedTodos = () => {
    todos.forEach(({ id, isCompleted }: Partial<Todo>) => {
      if (isCompleted) remove(id as string);
    });
  };

  return (
    <TabListProvider defaultIndex='all'>
      <Box className='mt-[20px] flex gap-[20px]'>
        <TabList selectedVariant='primary' className='flex  gap-[20px]'>
          <Button
            onClick={() => setFilter(Filters.ALL)}
            variant='secondary'
            buttonType='text'
            id='all'
          >
            All
          </Button>
          <Button
            onClick={() => setFilter(Filters.ACTIVE)}
            variant='secondary'
            buttonType='text'
            id='active'
          >
            Active
          </Button>
          <Button
            onClick={() => setFilter(Filters.COMPLETED)}
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
