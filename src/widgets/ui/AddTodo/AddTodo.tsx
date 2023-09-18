import useAddTodo from '@features/useAddTodo/useAddTodo.ts';
import { FC } from 'react';
import { Box, Button, Input } from 'simplify-dev';

const AddTodo: FC = () => {
  const { createTodo, ref } = useAddTodo();

  return (
    <Box
      className='flex justify-between gap-[10px] rounded-[10px] border-[2px] border-slate-400 bg-white p-[10px]'
      onSubmit={createTodo}
      as='form'
    >
      <Input
        className='w-full outline-none'
        placeholder='What needs to bee done?'
        type='text'
        ref={ref}
      />
      <Button buttonType='text' variant='secondary' type='submit'>
        Add
      </Button>
    </Box>
  );
};

export default AddTodo;
