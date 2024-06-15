import AddForm from '@/components/AddForm';
import Todos from '@/components/Todos';
import TodoContext from '@/store/TodoContext';
import { useContext } from 'react';

const HomePage = () => {
  const { items } = useContext(TodoContext);

  return (
    <>
      <AddForm />
      <Todos items={items} />
    </>
  );
};

export default HomePage;
