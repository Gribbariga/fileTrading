/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
interface ImportMetaEnv {
  readonly VITE_DOMAIN: string;
  readonly VITE_GUEST_MAX_SIZE_FILE: number;
  readonly VITE_GUEST_MAX_COUNT_FILE: number;
  readonly VITE_GUEST_MAX_DAY_STORAGE: number;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
