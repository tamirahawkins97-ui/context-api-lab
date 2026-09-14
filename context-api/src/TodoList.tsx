import { useTodos, type Todo } from './context/TodoContext';
import { useFilter } from './context/FilterContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { todos } = useTodos();
  const { filter } = useFilter();

  const filteredTodos = todos.filter((todo: Todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  if (todos.length === 0) {
    return (
      <div className="terminal-empty">
        <span className="terminal-cursor">_</span> NO ACTIVE RECORDS FOUND
      </div>
    );
  }

  return (
    <ul className="tech-todo-list">
      {filteredTodos.map((todo: Todo, index: number) => (
        <TodoItem key={todo.id} todo={todo} index={index} />
      ))}
    </ul>
  );
};
