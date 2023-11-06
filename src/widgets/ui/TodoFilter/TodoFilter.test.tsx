import TodosProvider from '@app/providers/TodosProvider';
import { Filters, Todo } from '@entities/todo/types';
import '@testing-library/jest-dom';
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen
} from '@testing-library/react';
import TodoFilter from '@widgets/ui/TodoFilter/TodoFilter.tsx';
import TodoList from '@widgets/ui/TodoList/TodoList.tsx';
import { beforeEach, describe, expect, it } from 'vitest';

describe('TodoFilterComponents', () => {
  beforeEach(() => cleanup());

  it('Filter by active', () => {
    const todos: Todo[] = [
      { id: '1', isCompleted: false, name: '1' },
      { id: '2', isCompleted: true, name: '123' }
    ];

    render(
      <TodosProvider init={{ filter: Filters.ALL, todos }}>
        <TodoList />
        <TodoFilter />
      </TodosProvider>
    );

    act(() => {
      fireEvent.click(screen.getByText('Active'));
    });

    expect(screen.getAllByRole('todo-item').length).toBe(
      todos.filter(({ isCompleted }) => !isCompleted).length
    );
  });

  it('Filter by completed', () => {
    const todos: Todo[] = [
      { id: '1', isCompleted: true, name: '1' },
      { id: '2', isCompleted: false, name: '123' }
    ];

    render(
      <TodosProvider init={{ filter: Filters.ALL, todos }}>
        <TodoList />
        <TodoFilter />
      </TodosProvider>
    );

    act(() => {
      fireEvent.click(screen.getByText('Completed'));
    });

    expect(screen.getAllByRole('todo-item').length).toBe(
      todos.filter(({ isCompleted }) => isCompleted).length
    );
  });

  it('Filter by all', () => {
    const todos: Todo[] = [
      { id: '1', isCompleted: false, name: '1' },
      { id: '2', isCompleted: false, name: '1' }
    ];

    render(
      <TodosProvider init={{ filter: Filters.ALL, todos }}>
        <TodoList />
        <TodoFilter />
      </TodosProvider>
    );

    act(() => {
      fireEvent.click(screen.getByText('Active'));
    });

    act(() => {
      fireEvent.click(screen.getByText('All'));
    });

    expect(screen.getAllByRole('todo-item').length).toBe(todos.length);
  });
});
