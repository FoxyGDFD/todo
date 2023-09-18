import { Todo } from '@widgets/ui/Todo/Todo.tsx';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TodosStore = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (completeId: string) => void;
  updateTodo: (removeId: string) => void;
};

const useTodosStore = create<TodosStore>()(
  persist(
    (set, get) => ({
      addTodo: todo =>
        set({
          todos: [todo].concat(get().todos)
        }),
      removeTodo: removeId =>
        set({ todos: get().todos.filter(({ id }) => id !== removeId) }),
      todos: [],
      updateTodo: completeId =>
        set({
          todos: get().todos.map(
            todo =>
              ({
                ...todo,
                isCompleted:
                  todo.id === completeId ? !todo.isCompleted : todo.isCompleted
              }) as Todo
          )
        })
    }),
    { name: 'todos' }
  )
);

export default useTodosStore;
