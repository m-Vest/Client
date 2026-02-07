import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useKakaoLogin } from '../../../apis/query/useKakaoLogin';
import { ROUTES_CONFIG } from '../../../routes/routesConfig';

const KakaoRedirect = () => {
  const navigate = useNavigate();
  const { mutate } = useKakaoLogin();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (!code) {
      console.error('카카오 인가 코드 없음');
      navigate(ROUTES_CONFIG.login.path);
      return;
    }

    mutate(
      { code },
      {
        onSuccess: (data) => {
          console.log('카카오 로그인 성공', data);

          // TODO: 토큰 저장 로직 (백엔드 구현 후)
          // ex) localStorage.setItem('accessToken', data.accessToken);

          navigate(ROUTES_CONFIG.onboarding.path);
        },
        onError: (error) => {
          console.error('카카오 로그인 실패', error,code);
          navigate(ROUTES_CONFIG.login.path);
        },
      }
    );
  }, []);

  return (
    <div className="h-[100dvh] flex justify-center items-center">
      <p className="text-[1.6rem] font-medium text-[#4A5565]">
        카카오 로그인 처리 중
      </p>
    </div>
  );
};

export default KakaoRedirect;
