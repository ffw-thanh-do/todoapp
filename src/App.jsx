import HomePage from '@/pages/HomePage';
import { TodoContextProvider } from '@/store/TodoContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from '@/pages/DetailPage';
import RootLayout from '@/layout/RootLayout';

function App() {
  return (
    <TodoContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="todo/:id" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TodoContextProvider>
  )
}

export default App
