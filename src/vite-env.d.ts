/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
interface ImportMetaEnv {
  readonly VITE_DOMAIN: string;
  readonly VITE_LOGIN_COOKIE_TIME: number;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
