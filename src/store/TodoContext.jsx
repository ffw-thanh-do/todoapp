import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const TodoContext = createContext({
  items: [],
  addTodo: () => {},
  editTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
});

export function TodoContextProvider({children}) {
  const [todos, setTodos] = useState({
    items: []
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
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
