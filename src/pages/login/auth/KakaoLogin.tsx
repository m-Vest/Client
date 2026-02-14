import { useEffect } from 'react';
import { useKakaoLogin } from '../../../apis/query/useKakaoLogin';
const KakaoRedirect = () => {
   const { loginWithKakao } = useKakaoLogin();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (code) {
      loginWithKakao(code);
    }
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
