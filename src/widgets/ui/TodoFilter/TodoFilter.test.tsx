import { list } from '@shared/mockData/mockLIst.json' assert { type: 'json' };
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import TodoFilter from '@widgets/ui/TodoFilter/TodoFilter.tsx';
import TodoList from '@widgets/ui/TodoList/TodoList.tsx';
import { describe, expect, it } from 'vitest';

describe('TodoFilterComponents', () => {
  it('Filter by active', () => {
    render(
      <>
        <TodoList todos={list} />
        <TodoFilter />
      </>
    );

    act(() => {
      fireEvent.click(screen.getByText('Active'));
    });

    expect(screen.getAllByRole('todo-item').length).toBe(
      list.filter(({ isCompleted }) => !isCompleted).length
    );
  });

  it('Filter by completed', () => {
    render(
      <>
        <TodoList todos={list} />
        <TodoFilter />
      </>
    );

    act(() => {
      fireEvent.click(screen.getByText('Completed'));
    });

    expect(screen.getAllByRole('todo-item').length).toBe(
      list.filter(({ isCompleted }) => isCompleted).length
    );
  });

  it('Filter by all', () => {
    render(
      <>
        <TodoList todos={list} />
        <TodoFilter />
      </>
    );

    act(() => {
      fireEvent.click(screen.getByText('Completed'));
    });

    act(() => {
      fireEvent.click(screen.getByText('All'));
    });

    expect(screen.getAllByRole('todo-item').length).toBe(list.length);
  });
});
