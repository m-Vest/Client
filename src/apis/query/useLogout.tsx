import { api } from "../../lib/api";
import { useNavigate } from "react-router-dom";
import { ROUTES_CONFIG } from "../../routes/routesConfig";
const useLogout = ()=> {
    const navigate = useNavigate();
    
    const logout = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) throw new Error('token 없음');

            await api.post(
            '/auth/logout',
            {}, 
            {
                headers: {
                Authorization: `Bearer ${accessToken}`,
                },
            }
            );

            localStorage.removeItem('accessToken');
            navigate(ROUTES_CONFIG.login.path);
        } catch (error) {
            console.error(error);
            navigate(ROUTES_CONFIG.login.path);
        }
    };

  return { logout };
   
}
export default useLogout;