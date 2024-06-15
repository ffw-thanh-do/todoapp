import TodoItem from '@/components/TodoItem';

function Todos({ items }) {
  return (
    <div className="flex flex-col flex-wrap gap-4 md:flex-row md:basis-1/4">
      {items.map((item) => {
        return <TodoItem key={item.id} todo={item} isDetail={true} />;
      })}
    </div>
  );
}

export default Todos;
