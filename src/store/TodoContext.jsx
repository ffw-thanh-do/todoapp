import { createContext, useEffect, useState } from 'react';

const TodoContext = createContext({
  items: [],
  addTodo: () => {},
  editTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
  getItem: () => {},
});

const todoStorageKey = 'todos';

export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState({
    items: localStorage.getItem(todoStorageKey) ? JSON.parse(localStorage.getItem(todoStorageKey)) : [],
  });

  function handleAddTodo(item) {
    setTodos((prev) => ({
      ...prev,
      items: [...prev.items, item],
    }));
  }

  function handleEditTodo(item) {
    const updatedTodosItems = [...todos.items];
    const itemId = todos.items.findIndex((todo) => todo.id === item.id);
    updatedTodosItems[itemId] = item;
    setTodos((prev) => ({
      ...prev,
      items: [...updatedTodosItems],
    }));
  }

  function handleRemoveTodo(item) {
    setTodos((prev) => ({
      ...prev,
      items: [...prev.items.filter((todo) => item.id !== todo.id)],
    }));
  }

  function handleToggleTodo(item) {
    const updatedTodosItems = [...todos.items];
    const itemId = todos.items.findIndex((todo) => todo.id === item.id);
    updatedTodosItems[itemId].completed = !item.completed;
    setTodos((prev) => ({
      ...prev,
      items: [...updatedTodosItems],
    }));
  }

  const contextValue = {
    items: todos.items,
    addTodo: handleAddTodo,
    editTodo: handleEditTodo,
    removeTodo: handleRemoveTodo,
    toggleTodo: handleToggleTodo,
    getItem: (id) => todos.items.find((todo) => String(todo.id) === String(id)),
  };

  useEffect(() => {
    localStorage.setItem(todoStorageKey, JSON.stringify(todos.items));
  }, [todos]);

  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>;
}

export default TodoContext;
