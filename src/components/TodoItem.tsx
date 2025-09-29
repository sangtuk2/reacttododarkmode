// todoitem.tsx
import React from 'react';

// Todo 아이템의 타입 정의
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// TodoItem 컴포넌트의 props 타입 정의
interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// 개별 할일 아이템을 표시하는 컴포넌트
const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li>
      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border-b border-gray-200 dark:border-gray-600">
        {/* 할일 제목 */}
        <span className="flex-1 text-sm text-gray-900 dark:text-white truncate">
          {todo.text}
        </span>

        {/* 완료/삭제 버튼 */}
        <div className="flex gap-2 items-center">
          {/* 미완료 상태일 때는 '완료' 버튼만 표시 */}
          {!todo.completed && (
            <button
              onClick={() => onToggle(todo.id)}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
            >
              완료
            </button>
          )}

          {/* 완료된 상태일 때는 '삭제' 버튼만 표시 */}
          {todo.completed && (
            <button
              onClick={() => onDelete(todo.id)}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
            >
              삭제
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default TodoItem;