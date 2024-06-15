import NotFound from '@/components/NotFound';
import TodoItem from '@/components/TodoItem';
import TodoContext from '@/store/TodoContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const store = useContext(TodoContext);

  if (!store.getItem(id)) {
    return <NotFound />;
  }

  return <TodoItem todo={store.getItem(id)} />;
};

export default DetailPage;
