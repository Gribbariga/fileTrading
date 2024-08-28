import { StoragePage } from "page/StoragePage/publickApi";
import { StorageViewPage } from "page/StorageViewPage/publicApi";
import { Suspense } from "react";
import { Route, RouteProps, Routes } from "react-router-dom";
import { AppRoutes } from "shared/config/routerConfig/routerConfig";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.STORAGE]: {
    path: AppRoutes.STORAGE,
    element: <StoragePage />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: AppRoutes.NOT_FOUND,
    element: <div />,
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
