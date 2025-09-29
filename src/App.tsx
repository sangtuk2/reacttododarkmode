import React, { useState, useEffect } from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

// 메인 App 컴포넌트 - 전체 애플리케이션의 루트
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <TodoProvider>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-[800px] max-w-4xl text-center">
          {/* 헤더 영역 */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">YONG TODO</h1>
            <button
              onClick={toggleDarkMode}
              className="text-2xl p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="다크모드 전환"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>

          {/* 할일 입력 섹션 */}
          <TodoInput />

          {/* 할일 목록 표시 */}
          <TodoList />
        </div>
      </TodoProvider>
    </div>
  );
};

export default App;