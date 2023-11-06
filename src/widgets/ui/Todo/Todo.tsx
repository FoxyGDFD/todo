import { useTodo } from '@enteties/todo/hooks/useTodo';
import { Todo } from '@enteties/todo/types';
import { FC } from 'react';
import { Button, Typography } from 'simplify-dev';
import { Checkbox } from 'simplify-dev/client-ui';

const TodoItem: FC<Todo> = props => {
  const { id, isCompleted, name } = props;
  const { update } = useTodo();

  const updateTask = () => {
    update({
      id,
      isCompleted: !isCompleted
    });
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
