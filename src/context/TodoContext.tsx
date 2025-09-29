import React, { createContext, useContext, useState, ReactNode } from 'react';

// Todo 아이템의 타입 정의
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// TodoContext에서 제공할 기능들의 타입 정의
interface TodoContextType {
  todos: Todo[];
  inputValue: string;
  setInputValue: (value: string) => void;
  addTodo: () => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

// TodoContext를 사용하는 커스텀 훅
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  // 할 일 목록 상태
  const [todos, setTodos] = useState<Todo[]>([]);
  // 입력 필드 상태
  const [inputValue, setInputValue] = useState<string>('');

  // 새로운 할 일을 추가하는 함수
  const addTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(), // 현재 시간을 ID로 사용
      text: inputValue,
      completed: false // 새로 추가된 할 일은 미완료 상태
    };

    setTodos(prev => [...prev, newTodo]);
    setInputValue(''); // 입력 필드 초기화
  };

  // 할 일을 삭제하는 함수
  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  // 할 일의 완료 상태를 토글하는 함수
  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Context에서 제공할 값들
  const value: TodoContextType = {
    todos,
    inputValue,
    setInputValue,
    addTodo,
    deleteTodo,
    toggleTodo
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};