import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "/",
  resolve: {
    alias: {
      src: "/src",
      shared: "/src/shared",
      features: "/src/features",
      page: "/src/page",
      widgets: "/src/widgets",
      public: "/public",
    },
  },

  server: {
    open: "/storage",
    watch: {
      usePolling: true,
    },
    host: true,
    port: 4517,
    proxy: {
      "/api": {
        target: "http://5.35.98.32/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
