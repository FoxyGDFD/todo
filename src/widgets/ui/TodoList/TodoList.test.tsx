import { list } from '@shared/mockData/mockLIst.json' assert { type: 'json' };
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TodoList from '@widgets/ui/TodoList/TodoList.tsx';
import { describe, expect, it } from 'vitest';

describe('TodoList component', () => {
  it('Render empty todo list', () => {
    render(<TodoList todos={[]} />);

    expect(screen.getByRole('todo-list')).toBeInTheDocument();
    expect(screen.getByRole('todo-list').children.length).toBe(0);
  });

  it('Render todo list', () => {
    render(<TodoList todos={list} />);

    expect(screen.getByRole('todo-list')).toBeInTheDocument();
    expect(screen.getByRole('todo-list').children.length).toBe(list.length);
  });
});
