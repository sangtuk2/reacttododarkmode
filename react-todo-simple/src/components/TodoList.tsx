import React from 'react';
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const { todos, toggleTodo, deleteTodo } = useTodo();

  const incompleteTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="todo-sections">
      <div className="todo-section">
        <h2 className="section-title">할 일</h2>
        {incompleteTodos.length === 0 ? (
          <div className="empty-message">
            아직 할 일이 없습니다.
          </div>
        ) : (
          <ul className="todo-list">
            {incompleteTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        )}
      </div>

      <div className="todo-section">
        <h2 className="section-title">완료</h2>
        {completedTodos.length === 0 ? (
          <div className="empty-message">
            완료된 할 일이 없습니다.
          </div>
        ) : (
          <ul className="todo-list">
            {completedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;