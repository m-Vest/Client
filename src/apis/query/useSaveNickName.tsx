import { useNavigate } from 'react-router-dom';
import { api } from '../../lib/api';
import { ROUTES_CONFIG } from '../../routes/routesConfig';

export const useSaveNickName = () => {
  const navigate = useNavigate();

  const saveNickName = async (nickname: string) => {
    try {
      const signupToken = localStorage.getItem('signupToken');
        if (!signupToken) {
            throw new Error('signupToken 없음');
            }
      const { data } = await api.post(
        '/auth/signup',
        {
            "platform": "KAKAO",    
            "userName": nickname,
            "birth": "2000-08-19"
        },
        {
          headers: {
            Authorization: `Bearer ${signupToken}`,
          },
        }
      );
      if (data.data.jwtToken) {
        const accessToken = data.data.jwtToken.accessToken;
        const refreshToken = data.data.jwtToken.refreshToken;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        navigate(ROUTES_CONFIG.home.path);
        return;        
    }
    } catch (error) {
      console.error('회원가입 실패', error);
      navigate(ROUTES_CONFIG.login.path);
    }
  };

  return { saveNickName };
};
