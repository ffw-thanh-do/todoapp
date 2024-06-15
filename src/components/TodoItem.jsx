import Card from '@/components/Card';
import TodoForm from '@/components/TodoForm';
import TodoContext from '@/store/TodoContext';
import { useContext, useState } from 'react';

const TodoItem = ({ todo, isDetail = false }) => {
  const store = useContext(TodoContext);
  const [editing, setEditing] = useState(false);

  const handleUpdate = (e, todo, title, description) => {
    e.preventDefault();
    const item = {
      ...todo,
      title,
      description,
    };
    store.editTodo(item);
    setEditing(false);
  };

  return (
    <>
      {!editing && <Card todo={todo} editing={editing} setEditing={setEditing} isDetail={isDetail} />}
      {editing && <TodoForm onSubmit={handleUpdate} todo={todo} setEditing={setEditing} />}
    </>
  );
};

export default TodoItem;
