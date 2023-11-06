import RootLayout from '@widgets/layout/RootLayout';
import AddTodo from '@widgets/ui/AddTodo/AddTodo';
import TodoFilter from '@widgets/ui/TodoFilter/TodoFilter';
import TodoList from '@widgets/ui/TodoList/TodoList';

const Main = () => {
  return (
    <RootLayout>
      <AddTodo />
      <TodoList />
      <TodoFilter />
    </RootLayout>
  );
};

export default Main;
