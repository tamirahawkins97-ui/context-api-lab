import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import { useTodos, type Todo } from './context/TodoContext';

export const TodoItem = ({ todo, index }: { todo: Todo; index: number }) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  const indexTag = String(index + 1).padStart(2, '0');

  return (
    <li className={`tech-todo-item ${todo.completed ? 'is-completed' : ''}`}>
      <button
        type="button"
        className={`tech-checkbox ${todo.completed ? 'checked' : ''}`}
        onClick={() => toggleTodo(todo.id)}
        aria-label="Toggle Complete"
      >
        {todo.completed && <span className="check-mark">■</span>}
      </button>

      <span className="task-index">[{indexTag}]</span>

      <div className="task-content">
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            className="edit-inline-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <span className="task-text" onDoubleClick={() => setIsEditing(true)}>
            {todo.text}
          </span>
        )}
      </div>

      <div className="task-actions">
        {!isEditing ? (
          <button
            className="action-btn edit"
            onClick={() => setIsEditing(true)}
            title="Edit"
          >
            EDIT
          </button>
        ) : (
          <button className="action-btn save" onClick={handleSave} title="Save">
            SAVE
          </button>
        )}
        <button
          className="action-btn delete"
          onClick={() => deleteTodo(todo.id)}
          title="Delete"
        >
          DEL
        </button>
      </div>
    </li>
  );
};
