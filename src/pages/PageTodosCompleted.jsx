import Todos from '@/components/Todos';
import TodoContext from '@/store/TodoContext';
import { useContext } from 'react';

const PageTodosCompleted = () => {
  const { getCompletedItems } = useContext(TodoContext);

  return (
    <>
      <Todos items={getCompletedItems()} />
    </>
  );
};

export default PageTodosCompleted;
