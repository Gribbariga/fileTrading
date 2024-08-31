import { NotFoundPage } from "page/NotFoundPage/UI/NotFoundPage";
import { StoragePage } from "page/StoragePage/publicApi";
import { StorageViewPage } from "page/StorageViewPage/publicApi";
import { Suspense } from "react";
import { Route, RouteProps, Routes } from "react-router-dom";
import { AppRoutes } from "shared/config/routerConfig/routerConfig";
import { PageFallBack } from "shared/PageFallBack/PageFallBack";

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
};

const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={<Suspense fallback={<div />}>{element}</Suspense>}
      />
    ))}
  </Routes>
);

export default AppRouter;
