import { Outlet } from 'react-router-dom';
import TabBar from './tabbar/TabBar';
import { useLocation } from 'react-router-dom';
import { ROUTES_CONFIG } from '../routes/routesConfig';
const Layout = () => {
  const location = useLocation();

  const isSidebarHidden = location.pathname.startsWith(ROUTES_CONFIG.onboarding.path) || location.pathname.startsWith(ROUTES_CONFIG.login.path)


  return (
    <div className="min-h-dvh w-full flex justify-center">
        <main className={`relative w-[100vw] max-w-[500px] min-h-dvh bg-[#F9FAFB] ${isSidebarHidden ? '' : 'pb-[7rem]'}`}>
           {!isSidebarHidden && ( 
            <div className="fixed bottom-0 left-0 right-0 z-10 flex justify-center w-[100dvw]">
                <TabBar />
            </div>)}
            <Outlet />
        </main>
    </div>
  ); 
};

export default Layout;
