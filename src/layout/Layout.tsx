import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import TabBar from './tabbar/TabBar';
import { ROUTES_CONFIG } from '../routes/routesConfig';

const Layout = () => {
  const location = useLocation();

  const isSidebarHidden =
    location.pathname.startsWith(ROUTES_CONFIG.onboarding.path) ||
    location.pathname.startsWith(ROUTES_CONFIG.login.path) ||
    location.pathname.startsWith(ROUTES_CONFIG.namePage.path);

  return (
    <div className="min-h-dvh w-full flex justify-center">
      <main
        className={`relative w-[100vw] max-w-[500px] min-h-dvh bg-[#F9FAFB] ${
          isSidebarHidden ? '' : 'pb-[7rem]'
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
             key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.22,
              ease: "easeOut",
            }}
            className="absolute inset-0"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>

        {!isSidebarHidden && (
          <div className="fixed bottom-0 left-0 right-0 z-10 flex justify-center w-[100dvw]">
            <TabBar />
          </div>
        )}
      </main>
    </div>
  );
};

export default Layout;
