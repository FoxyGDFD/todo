import TodosProvider from '@features/TodosProvider';
import AddTodo from '@widgets/ui/AddTodo/AddTodo';
import TodoFilter from '@widgets/ui/TodoFilter/TodoFilter';
import TodoList from '@widgets/ui/TodoList/TodoList';

const Main = () => {
  return (
    <TodosProvider>
      <AddTodo />
      <TodoList />
      <TodoFilter />
    </TodosProvider>
  );
};

export default Main;
