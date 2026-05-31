import axios, {
  AxiosHeaders,
  type AxiosError,
  type InternalAxiosRequestConfig,
} from 'axios';

const apiBaseURL = import.meta.env.DEV
    ? '/api/v1'
    : import.meta.env.VITE_API_BASE_URL;

interface ReissueResponse {
  code: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

interface RetryableRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export const api = axios.create({
  baseURL: apiBaseURL,
  withCredentials: false,
});

let refreshPromise: Promise<string> | null = null;

const setAuthorizationHeader = (
  config: InternalAxiosRequestConfig,
  token: string
) => {
  const headers = AxiosHeaders.from(config.headers);
  headers.set('Authorization', `Bearer ${token}`);
  config.headers = headers;
};

const hasAuthorizationHeader = (config: InternalAxiosRequestConfig) => {
  if (!config.headers) return false;

  return Boolean(AxiosHeaders.from(config.headers).get('Authorization'));
};

const clearTokensAndRedirect = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');

  if (window.location.pathname !== '/login') {
    window.location.replace('/login');
  }
};

const reissueToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');

  if (!refreshToken) {
    throw new Error('refreshToken 없음');
  }

  const { data } = await axios.post<ReissueResponse>(
    '/auth/reissue',
    {},
    {
      baseURL: apiBaseURL,
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );

  localStorage.setItem('accessToken', data.data.accessToken);
  localStorage.setItem('refreshToken', data.data.refreshToken);

  return data.data.accessToken;
};

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken && !hasAuthorizationHeader(config)) {
    setAuthorizationHeader(config, accessToken);
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryableRequestConfig | undefined;
    const status = error.response?.status;
    const shouldTryRefresh =
      originalRequest &&
      !originalRequest._retry &&
      status !== undefined &&
      [401, 403, 500].includes(status) &&
      !originalRequest.url?.includes('/auth/reissue') &&
      !originalRequest.url?.includes('/auth/login');

    if (!shouldTryRefresh || !originalRequest) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      refreshPromise = refreshPromise ?? reissueToken();
      const newAccessToken = await refreshPromise;

      setAuthorizationHeader(originalRequest, newAccessToken);

      return api(originalRequest);
    } catch (refreshError) {
      clearTokensAndRedirect();
      return Promise.reject(refreshError);
    } finally {
      refreshPromise = null;
    }
  }
);
