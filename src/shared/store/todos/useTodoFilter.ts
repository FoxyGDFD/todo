import { create } from 'zustand';

type TodoFilter = {
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
};

const useTodoFilter = create<TodoFilter>(set => ({
  filter: 'all',
  setFilter: todos => {
    set({
      filter: todos
    });
  }
}));

export default useTodoFilter;
