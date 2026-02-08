import { api } from '../lib/api';

interface KakaoLoginRequest {
  code: string;
}

export const kakaoLogin = async ({ code }: KakaoLoginRequest) => {
  const { data } = await api.post('/auth/kakao', { code });
  return data;
};
