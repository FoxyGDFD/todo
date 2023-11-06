import { TodosContext } from '@entities/todo/context';
import { Filters, Todo } from '@entities/todo/types';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TodoList from '@widgets/ui/TodoList/TodoList.tsx';
import { describe, expect, it } from 'vitest';

describe('TodoList component', () => {
  it('Render empty todo list', () => {
    const todos: Todo[] = [];
    render(
      <TodosContext.Provider value={{ filter: Filters.ALL, todos }}>
        <TodoList />
      </TodosContext.Provider>
    );

    expect(screen.getByRole('todo-list')).toBeInTheDocument();
    expect(screen.getByRole('todo-list').children.length).toBe(0);
  });

  it('Render todo list', () => {
    const todos: Todo[] = [
      { id: '1', isCompleted: false, name: '1' },
      { id: '2', isCompleted: false, name: '1' }
    ];
    render(
      <TodosContext.Provider value={{ filter: Filters.ALL, todos }}>
        <TodoList />
      </TodosContext.Provider>
    );

    expect(screen.getByRole('todo-list')).toBeInTheDocument();
    expect(screen.getByRole('todo-list').children.length).toBe(todos.length);
  });
});
