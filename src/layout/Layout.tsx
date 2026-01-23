import { Outlet } from 'react-router-dom';
import TabBar from './tabbar/TabBar';
const Layout = () => {
  return (
    <div className="min-h-dvh w-full bg-black flex justify-center">
        <main className="relative w-[100vw] max-w-[500px] bg-white min-h-dvh">
            <div className="absolute bottom-0 left-0 right-0">
                <TabBar />
            </div>
            <Outlet />
        </main>
    </div>
  );
};

export default Layout;
