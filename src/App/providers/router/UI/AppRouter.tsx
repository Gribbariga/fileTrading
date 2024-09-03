import { NotFoundPage } from "page/NotFoundPage/UI/NotFoundPage";
import { StoragePage } from "page/StoragePage/publicApi";
import { StorageViewPage } from "page/StorageViewPage/publicApi";
import { Suspense } from "react";
import { Route, RouteProps, Routes } from "react-router-dom";
import { AppRoutes } from "shared/config/routerConfig/routerConfig";
import { PageFallBack } from "shared/PageFallBack/PageFallBack";
import RegisterPage from "src/page/RegisterPage/UI/RegisterPage";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.STORAGE]: {
    path: AppRoutes.STORAGE,
    element: <StoragePage />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: AppRoutes.NOT_FOUND,
    element: <NotFoundPage />,
  },
  [AppRoutes.STORAGE_VIEW]: {
    path: AppRoutes.STORAGE_VIEW,
    element: <StorageViewPage />,
  },
  [AppRoutes.REGISTER]: {
    path: AppRoutes.REGISTER,
    element: <RegisterPage />,
  },
};

const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={<Suspense fallback={<PageFallBack />}>{element}</Suspense>}
      />
    ))}
  </Routes>
);

export default AppRouter;
