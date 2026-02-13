

// apis/auth/kakao.ts
interface KakaoTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
}

export const getKakaoAccessToken = async (code: string) => {
  const response = await fetch('https://kauth.kakao.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: import.meta.env.VITE_KAKAO_REST_API_KEY, 
      redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
      client_secret: import.meta.env.VITE_KAKAO_CLIENT_SECRET,
      code,
    }),
  });

  if (!response.ok) {
    throw new Error('카카오 토큰 발급 실패');
  }

  return (await response.json()) as KakaoTokenResponse;
};
