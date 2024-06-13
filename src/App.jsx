import HomePage from '@/pages/HomePage';
import { TodoContextProvider } from '@/store/TodoContext';

function App() {
  return (
    <TodoContextProvider>
      <div className='bg-stone-900 grid py-4 min-h-screen'>
        <HomePage />
      </div>
    </TodoContextProvider>
  )
}

export default App
