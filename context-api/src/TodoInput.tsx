import { useState, type FormEvent } from 'react';
import { useTodos } from './context/TodoContext';

export const TodoInput = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form className="tech-input-container" onSubmit={handleSubmit}>
      <span className="input-prompt">&gt;</span>
      <input
        type="text"
        className="tech-input"
        placeholder="ENTER_TASK..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-btn">
        PUSH
      </button>
    </form>
  );
};
