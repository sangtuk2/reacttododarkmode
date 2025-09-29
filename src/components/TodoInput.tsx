// todoinput.tsx
import React from 'react';
import { useTodo } from '../context/TodoContext';

// 할일 입력 컴포넌트
const TodoInput: React.FC = () => {
  const { inputValue, setInputValue, addTodo } = useTodo();

  // Enter 키 입력 시 할일 추가
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="flex gap-3 mb-5">
      {/* 할일 입력 필드 */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="할 일 입력"
        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-green-500"
      />

      {/* 할일 추가 버튼 */}
      <button
        onClick={addTodo}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        할 일 추가
      </button>
    </div>
  );
};

export default TodoInput;