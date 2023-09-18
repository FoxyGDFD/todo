import useTodosStore from '@shared/store/todos/useTodosStore.ts';
import RootLayout from '@widgets/layout/RootLayout.tsx';
import AddTodo from '@widgets/ui/AddTodo/AddTodo.tsx';
import TodoFilter from '@widgets/ui/TodoFilter/TodoFilter.tsx';
import TodoList from '@widgets/ui/TodoList/TodoList.tsx';
import { FC } from 'react';

const App: FC = () => {
  const { todos } = useTodosStore();

  return (
    <RootLayout>
      <AddTodo />
      <TodoList todos={todos} />
      <TodoFilter />
    </RootLayout>
  );
};

export default App;
