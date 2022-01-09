declare module '*.png';
declare module '*.svg';
declare module 'react-native-user-avatar';

declare module '@env' {
  export const ENV: 'local' | 'dev' | 'prod' | 'stage';
  export const BASE_URL: string;
}
