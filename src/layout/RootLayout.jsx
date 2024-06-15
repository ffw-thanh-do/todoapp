import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-20 px-4">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
