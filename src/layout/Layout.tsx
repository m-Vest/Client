import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-dvh w-full bg-black flex justify-center">
      <main className="w-[100vw] max-w-[500px] bg-white min-h-dvh">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
