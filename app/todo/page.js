'use client'
import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const handleAddTodo = (e) => {
    if (e) e.preventDefault();
    if (inputValue.trim() === '') return;

    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false, isEditing: false },
    ]);
    setInputValue('');
  };

  // Delete todo
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle complete
  const handleToggle = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit todo
  const handleEdit = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
  };

  // Save edited todo
  const handleSaveEdit = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, text: newText, isEditing: false }
          : todo
      )
    );
  };

  // Filter logic
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-lg p-6'>
        <h1 className='text-2xl font-bold text-gray-800 mb-6'>📝 Todo App</h1>
        
        {/* Add Todo Form */}
        <form onSubmit={handleAddTodo} className='mb-6 flex'>
          <input
            className='flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
          />
          <button 
            type="submit"
            className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition duration-200'
          >
            Add
          </button>
        </form>

        {/* Filter Buttons */}
        <div className='flex space-x-2 mb-6'>
          <button 
            onClick={() => setFilter('all')} 
            className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('active')} 
            className={`px-3 py-1 rounded ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Active
          </button>
          <button 
            onClick={() => setFilter('completed')} 
            className={`px-3 py-1 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Completed
          </button>
        </div>

        {/* Todo List */}
        <ul className='space-y-3 max-h-96 overflow-y-auto'>
          {filteredTodos.length === 0 ? (
            <p className='text-gray-500 text-center py-4'>No tasks found</p>
          ) : (
            filteredTodos.map((todo) => (
              <li 
                key={todo.id} 
                className={`flex items-center justify-between p-3 rounded-lg border ${todo.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'}`}
              >
                <div className='flex items-center space-x-3'>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(todo.id)}
                    className='h-5 w-5 rounded border-gray-300 text-blue-500 focus:ring-blue-400 cursor-pointer'
                  />
                  {todo.isEditing ? (
                    <input
                      className='flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500'
                      defaultValue={todo.text}
                      onBlur={(e) => handleSaveEdit(todo.id, e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit(todo.id, e.target.value)}
                      autoFocus
                    />
                  ) : (
                    <span
                      className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
                    >
                      {todo.text}
                    </span>
                  )}
                </div>
                <div className='flex space-x-2'>
                  {!todo.completed && !todo.isEditing && (
                    <button 
                      onClick={() => handleEdit(todo.id)}
                      className='text-gray-500 hover:text-blue-500 transition duration-200'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  )}
                  <button 
                    onClick={() => handleDelete(todo.id)} 
                    className='text-gray-500 hover:text-red-500 transition duration-200'
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>

        {/* Todo Count */}
        {todos.length > 0 && (
          <div className='mt-4 text-sm text-gray-500'>
            {todos.filter(todo => !todo.completed).length} items left
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;