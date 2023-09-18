import useTodosStore from '@shared/store/todos/useTodosStore.ts';
import { FC } from 'react';
import { Button, ButtonProps, Typography } from 'simplify-dev';
import { Checkbox } from 'simplify-dev/client-ui';

export type Todo = {
  readonly id: string;
  name: string;
  isCompleted: boolean;
};

const TodoItem: FC<Todo & ButtonProps> = props => {
  const { id, isCompleted, name } = props;
  const { updateTodo } = useTodosStore();

  const updateTask = () => {
    updateTodo(id);
  };

  return (
    <Button
      className='flex items-center gap-[10px] rounded-[10px] bg-white p-[10px] hover:bg-slate-200 focus:bg-slate-200'
      variant={'secondary'}
      onClick={updateTask}
      role='todo-item'
      buttonType='text'
    >
      <Checkbox state={isCompleted} className='min-w-[24px]' />
      <Typography as='label' htmlFor={id}>
        {name}
      </Typography>
    </Button>
  );
};

export default TodoItem;
