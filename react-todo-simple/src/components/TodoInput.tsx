import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="새로운 할일을 입력하세요"
        className="todo-input"
      />
      <button type="submit" className="todo-add-btn">
        추가
      </button>
    </form>
  );
};

export default TodoInput;