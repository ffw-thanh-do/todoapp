import AddForm from '@/components/AddForm';
import Todos from '@/components/Todos';

const HomePage = () => {
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-x1'>
      <AddForm />
      <Todos />
    </div>
  )
}

export default HomePage
