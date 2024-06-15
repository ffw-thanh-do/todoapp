import RootLayout from '@/layout/RootLayout';
import DetailPage from '@/pages/DetailPage';
import HomePage from '@/pages/HomePage';
import PageError from '@/pages/PageError';
import { TodoContextProvider } from '@/store/TodoContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <TodoContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="todo/:id" element={<DetailPage />} />
            <Route path="*" element={<PageError />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TodoContextProvider>
  );
}

export default App;
