import { Outlet } from 'react-router-dom';
import TabBar from './tabbar/TabBar';
const Layout = () => {
  return (
    <div className="min-h-dvh w-full flex justify-center">
        <main className="relative w-[100vw] max-w-[500px] min-h-dvh pb-[7rem] bg-[#F9FAFB]">
            <div className="fixed bottom-0 left-0 right-0 z-10 flex justify-center w-[100dvw]">
                <TabBar />
            </div>
            <Outlet />
        </main>
    </div>
  ); 
};

export default Layout;
