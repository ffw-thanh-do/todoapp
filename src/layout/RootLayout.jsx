import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

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
