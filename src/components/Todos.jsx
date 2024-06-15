import TodoItem from '@/components/TodoItem';
import TodoContext from '@/store/TodoContext';
import { useContext } from 'react';

function Todos() {
  const { items } = useContext(TodoContext);

  return (
    <div className="flex flex-col flex-wrap gap-4 md:flex-row md:basis-1/4">
      {items.map((item) => {
        return <TodoItem key={item.id} todo={item} isDetail={true} />;
      })}
    </div>
  );
}

export default Todos;
