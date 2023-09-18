import useTodosStore from '@shared/store/todos/useTodosStore.ts';
import { FormEvent, useRef } from 'react';
import { v4 } from 'uuid';

const useAddTodo = () => {
  const id = v4();
  const { addTodo } = useTodosStore();
  const ref = useRef<HTMLInputElement>(null);

  return {
    createTodo: (e: FormEvent) => {
      e.preventDefault();
      if (ref?.current?.value) {
        addTodo({ id, isCompleted: false, name: ref?.current?.value });
        ref.current.value = '';
      }
    },
    ref
  };
};

export default useAddTodo;
