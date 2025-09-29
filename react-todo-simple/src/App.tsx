import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <TodoProvider>
        <div className="todo-container">
          <div className="header">
            <h1 className="app-title">YONG TODO</h1>
          </div>

          <TodoInput />
          <TodoList />
        </div>
      </TodoProvider>
    </div>
  );
};

export default App;
