import { useState } from 'react';
import { createContext } from 'react';

const TodoContext = createContext({
  items: [],
  addTodo: () => {},
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

  const contextValue = {
    items: todos.items,
    addTodo: handleAddTodo,
  }

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
