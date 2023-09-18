import '@testing-library/jest-dom';
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen
} from '@testing-library/react';
import Todo from '@widgets/ui/Todo/Todo.tsx';
import { afterEach, describe, expect, it } from 'vitest';

afterEach(() => {
  cleanup();
});

describe('Todo component', () => {
  it('Render unchecked Todo', () => {
    render(
      <Todo id='task-unchecked' name='task unchecked' isCompleted={false} />
    );

    expect(screen.getByRole('img').getAttribute('class')).toBe(
      'w-full h-full grayscale-0 opacity-0'
    );
    expect(screen.getByRole('todo-item')).toBeInTheDocument();
    expect(screen.getByText('task unchecked')).toBeInTheDocument();
  });

  it('Render checked Todo', () => {
    render(<Todo id='task-checked' name='task checked' isCompleted={true} />);

    expect(screen.getByRole('img').getAttribute('class')).toBe(
      'w-full h-full grayscale-0 opacity-1'
    );
    expect(screen.getByRole('todo-item')).toBeInTheDocument();
    expect(screen.getByText('task checked')).toBeInTheDocument();
  });

  it('Check Todo', () => {
    render(<Todo id='123' name='task checked' isCompleted={false} />);
    const todo = screen.getByRole('img');
    expect(todo.getAttribute('class')).toBe(
      'w-full h-full grayscale-0 opacity-0'
    );

    expect(screen.getByRole('todo-item')).toBeInTheDocument();
    expect(screen.getByText('task checked')).toBeInTheDocument();

    act(() => {
      fireEvent.click(todo);
    });

    expect(todo.getAttribute('class')).toBe(
      'w-full h-full grayscale-0 opacity-1'
    );
  });
});
