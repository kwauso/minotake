export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || (() => {
    throw new Error('NEXT_PUBLIC_API_URL is not defined');
  })();

export const BACKEND_API_URL = process.env.BACKEND_API_URL || (() => {
    throw new Error('BACKEND_API_URL is not defined');
  })();