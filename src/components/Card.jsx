import TodoContext from '@/store/TodoContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ todo, setEditing, isDetail }) => {
  const { id, title, description, completed } = todo;
  const navigate = useNavigate();
  const store = useContext(TodoContext);

  function handleDelete() {
    store.removeTodo(todo);

    navigate('/');
  }

  return (
    <div
      className={`w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${completed ? 'opacity-50' : ''}`}
    >
      <div className="flex flex-col items-center py-10">
        <h5 onClick={() => store.toggleTodo(todo)} className="mb-1 text-xl font-medium text-gray-900 cursor-pointer">
          {title}
        </h5>
        <span onClick={() => store.toggleTodo(todo)} className="text-sm text-gray-500 cursor-pointer">
          {description}
        </span>
        <div className="flex mt-4 md:mt-6 gap-2">
          {isDetail && (
            <button
              onClick={() => navigate(`/todo/${id}`)}
              className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Link to detail
            </button>
          )}
          <button
            onClick={() => setEditing(true)}
            className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
