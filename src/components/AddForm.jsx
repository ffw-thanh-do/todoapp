import todo_icon from '@/assets/todo_icon.png';
import TodoContext from '@/store/TodoContext';
import { useContext } from 'react';
import { useRef } from 'react';

const AddForm = () => {
  const title = useRef();
  const description = useRef();
  const store = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    store.addTodo({
      id: new Date().valueOf(),
      title: title.current.value,
      description: description.current.value,
      completed: false
    })

    e.target.reset();
  }

  return (
    <>
      <div className='flex items-center gap-2'>
        <img className='w-8' src={todo_icon} alt="" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>
      <div className='py-5 bg-white antialiased'>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
            <input type="text" id="title" ref={title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
          </div>
          <div className="mb-5">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
            <input type="text" id="description" ref={description} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
          </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Add</button>
        </form>
      </div>
    </>
  )
}

export default AddForm
