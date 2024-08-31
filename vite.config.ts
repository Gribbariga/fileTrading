import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "./",
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      shared: path.resolve(__dirname, "src/shared"),
      features: path.resolve(__dirname, "src/features"),
      page: path.resolve(__dirname, "src/page"),
      widgets: path.resolve(__dirname, "src/widgets"),
      public: path.resolve(__dirname, "public"),
    },
  },

  server: {
    open: "/storage",
    watch: {
      usePolling: true,
    },
    host: true,
    port: 4517,
    // proxy: {
    //   "/api": {
    //     target: "http://5.35.98.32/",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  },
});
