// vite.config.ts
import { defineConfig } from "file:///D:/Projects/fileTraiding/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Projects/fileTraiding/node_modules/@vitejs/plugin-react-swc/index.mjs";
import svgr from "file:///D:/Projects/fileTraiding/node_modules/vite-plugin-svgr/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [react(), svgr()],
  base: "/",
  resolve: {
    alias: {
      src: "/src",
      shared: "/src/shared",
      features: "/src/features",
      page: "/src/page",
      widgets: "/src/widgets",
      public: "/public"
    }
  },
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    port: 4517
    // proxy: {
    //   "/api": {
    //     target: "https://filesharing-st.ru/",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxmaWxlVHJhaWRpbmdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXGZpbGVUcmFpZGluZ1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvamVjdHMvZmlsZVRyYWlkaW5nL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHN2Z3IgZnJvbSBcInZpdGUtcGx1Z2luLXN2Z3JcIjtcclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKSwgc3ZncigpXSxcclxuICBiYXNlOiBcIi9cIixcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBzcmM6IFwiL3NyY1wiLFxyXG4gICAgICBzaGFyZWQ6IFwiL3NyYy9zaGFyZWRcIixcclxuICAgICAgZmVhdHVyZXM6IFwiL3NyYy9mZWF0dXJlc1wiLFxyXG4gICAgICBwYWdlOiBcIi9zcmMvcGFnZVwiLFxyXG4gICAgICB3aWRnZXRzOiBcIi9zcmMvd2lkZ2V0c1wiLFxyXG4gICAgICBwdWJsaWM6IFwiL3B1YmxpY1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzZXJ2ZXI6IHtcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHVzZVBvbGxpbmc6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgaG9zdDogdHJ1ZSxcclxuICAgIHBvcnQ6IDQ1MTcsXHJcbiAgICAvLyBwcm94eToge1xyXG4gICAgLy8gICBcIi9hcGlcIjoge1xyXG4gICAgLy8gICAgIHRhcmdldDogXCJodHRwczovL2ZpbGVzaGFyaW5nLXN0LnJ1L1wiLFxyXG4gICAgLy8gICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgIC8vICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgXCJcIiksXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdRLFNBQVMsb0JBQW9CO0FBQzdSLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFFakIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFBQSxFQUN6QixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
