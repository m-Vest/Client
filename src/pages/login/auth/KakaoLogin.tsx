import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getKakaoAccessToken } from '../../../apis/auth';
import { ROUTES_CONFIG } from '../../../routes/routesConfig';
import { api } from '../../../lib/api';
import { nav } from 'framer-motion/client';
const KakaoRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogin = async () => {
      try {
        const code = new URL(window.location.href).searchParams.get('code');

        if (!code) {
          throw new Error('카카오 인가 코드 없음');
        }
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
        console.log(data.data.type)
        if (data.data.type === "SIGNUP_REQUIRED"){
          localStorage.setItem('signupToken', data.data.signupToken);
          navigate(ROUTES_CONFIG.onboarding.path);
        } else {
          if (data.data.jwtToken){
            localStorage.setItem('accessToken', data.data.jwtToken);
            navigate(ROUTES_CONFIG.home.path);
          }
        }

        navigate(ROUTES_CONFIG.onboarding.path);

      } catch (error) {
        console.error('카카오 로그인 실패', error);
        navigate(ROUTES_CONFIG.login.path);
      }
    };

    handleLogin();
  }, [navigate]);



  return (
    <div className="h-[100dvh] flex justify-center items-center">
      <p className="text-[1.6rem] font-medium text-[#4A5565]">
        카카오 로그인 처리 중
      </p>
    </div>
  );
};

export default KakaoRedirect;
