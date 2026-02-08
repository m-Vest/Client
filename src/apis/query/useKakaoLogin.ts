import { useMutation } from '@tanstack/react-query';
import { kakaoLogin } from '../auth';

export const useKakaoLogin = () => {
  return useMutation({
    mutationFn: kakaoLogin,
  });
};
