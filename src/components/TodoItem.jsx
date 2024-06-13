import delete_icon from '@/assets/delete.svg';
import edit_icon from '@/assets/edit.svg';
import not_tick from '@/assets/not_tick.png';
import tick from '@/assets/tick.png';

const TodoItem = ({ todo: { id, title, description, completed } }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className='flex flex-1 items-center cursor-pointer'>
        <img src={completed ? tick: not_tick} alt="" className='w-7' />
        <p className='tex-slate-700 ml-4 text-[17px]'>{title}</p>
        <p className='tex-slate-700 ml-4 text-[17px]'>{description}</p>
      </div>
      <img src={edit_icon} alt="" className='w-3.5 cursor-pointer'/>
      <img src={delete_icon} alt="" className='w-3.5 cursor-pointer'/>
    </div>
  )
}

export default TodoItem
