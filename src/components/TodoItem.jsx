import delete_icon from '@/assets/delete.svg';
import edit_icon from '@/assets/edit.svg';
import not_tick from '@/assets/not_tick.png';
import tick from '@/assets/tick.png';
import TodoContext from '@/store/TodoContext';
import { useRef } from 'react';
import { useContext, useState } from 'react';

const TodoItem = ({ todo }) => {
  const { id, title, description, completed } = todo;
  const titleEl = useRef();
  const descriptionEl = useRef();
  const store = useContext(TodoContext);

  const [editing, setEditing] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    const item = {
      ...todo,
      title: titleEl.current.value,
      description: descriptionEl.current.value
    }
    store.editTodo(item)
    setEditing(false);
  }

  return (
    <>
      {!editing &&
        <div className="flex items-center my-3 gap-2">
          <div className='flex flex-1 items-center cursor-pointer' onClick={() => store.toggleTodo(todo)}>
            <img src={completed ? tick: not_tick} alt="" className='w-7' />
            <p className='tex-slate-700 ml-4 text-[17px]'>{title}</p>
            <p className='tex-slate-700 ml-4 text-[17px]'>{description}</p>
          </div>

          <img src={edit_icon} alt="" className='w-3.5 cursor-pointer' onClick={() => setEditing(true)} />
          <img src={delete_icon} alt="" className='w-3.5 cursor-pointer' onClick={() => store.removeTodo(todo)}/>
        </div>
      }

      {editing &&
        <form className="max-w-sm mx-auto" onSubmit={handleUpdate}>
          <div className="mb-5">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
            <input type="text" id="title" ref={titleEl} defaultValue={title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
          </div>
          <div className="mb-5">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
            <input type="text" id="description" ref={descriptionEl} defaultValue={description} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
          </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Update</button>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={() => setEditing(false)}>Cancel</button>
        </form>
      }
    </>

  )
}

export default TodoItem
