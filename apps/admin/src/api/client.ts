import axios, { AxiosError, AxiosInstance } from 'axios';
import { useCallback, useMemo, useState } from 'react';

// トークン管理ユーティリティ
const TOKEN_KEY = 'clerk_token';

export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TOKEN_KEY);
};

// API基本設定
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:9999/api/v1';

// APIクライアントの作成
export const createApiClient = (withAuth = false): AxiosInstance => {
  const client = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (withAuth) {
    // 認証リクエスト用のインターセプター
    client.interceptors.request.use(
      (config) => {
        const token = getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // レスポンスインターセプター
    client.interceptors.response.use(
      (response) => {
        return response;
      },
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          // 認証エラーの場合、トークンを削除
          removeToken();
          // ログインページにリダイレクト
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  return client;
};

// 認証なしAPI
export const api = createApiClient();

// apiAuthインスタンスをメモ化する関数
let memoizedApiAuth: AxiosInstance | null = null;

// 認証ありAPI（メモ化）
export const getMemoizedApiAuth = (): AxiosInstance => {
  if (!memoizedApiAuth) {
    memoizedApiAuth = createApiClient(true);
  }
  return memoizedApiAuth;
};

// Reactフックとして使用する場合
export const useApi = (withAuth = false) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // 認証が必要な場合はメモ化されたインスタンスを使用
  const apiClient = useMemo(() => {
    return withAuth ? getMemoizedApiAuth() : api;
  }, [withAuth]);

  const resetError = useCallback(() => {
    setError(null);
  }, []);

  return {
    api: apiClient,
    loading,
    error,
    setLoading,
    setError,
    resetError,
  };
};

// 認証付きAPIのフックを追加
export const useApiAuth = () => {
  const { api } = useApi(true);
  return api;
};

// apiAuthのエクスポートを維持（互換性のため）
export const apiAuth = getMemoizedApiAuth();

// 認証関連のAPI
export const authApi = {
  // ユーザー情報取得API
  getCurrentUser: async (authApiClient: AxiosInstance) => {
    const response = await authApiClient.get('/auth/me');
    return response.data;
  },
  
  // 認証状態確認API
  getAuthStatus: async (authApiClient: AxiosInstance) => {
    const response = await authApiClient.get('/auth');
    return response.data;
  },
};

// その他のAPI（必要に応じて追加） 