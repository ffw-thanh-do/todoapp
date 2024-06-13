import TodoItem from '@/components/TodoItem';
import TodoContext from '@/store/TodoContext';
import { useContext } from 'react';

function Todos () {
  const { items } = useContext(TodoContext);

  return (
    <div>
      {items.map((item) => {
        return <TodoItem key={item.id} todo={item} />
      })}
    </div>
  )
}

export default Todos
