import { useNavigate } from 'react-router-dom';
import { getKakaoAccessToken } from '../auth';
import { api } from '../../lib/api';
import { ROUTES_CONFIG } from '../../routes/routesConfig';

export const useKakaoLogin = () => {
  const navigate = useNavigate();

  const loginWithKakao = async (code: string) => {
    try {
      const kakaoToken = await getKakaoAccessToken(code);

      localStorage.setItem('kakaoAccessToken', kakaoToken.access_token);

      const { data } = await api.post(
        '/auth/login',
        { platform: 'KAKAO' },
        {
          headers: {
            Authorization: `Bearer ${kakaoToken.access_token}`,
          },
        }
      );

      if (data.data.type === 'SIGNUP_REQUIRED') {
        localStorage.setItem('signupToken', data.data.signupToken);
        navigate(ROUTES_CONFIG.onboarding.path);
        return;
      }

      if (data.data.jwtToken) {
        localStorage.setItem('accessToken', data.data.jwtToken);
        navigate(ROUTES_CONFIG.home.path);
        return;
      }

      navigate(ROUTES_CONFIG.login.path);
    } catch (error) {
      console.error('카카오 로그인 실패', error);
      navigate(ROUTES_CONFIG.login.path);
    }
  };

  return { loginWithKakao };
};
