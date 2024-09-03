export enum AppRoutes {
  NOT_FOUND = "*",
  STORAGE = "/storage",
  STORAGE_VIEW = "/storage/:storageLink",
  REGISTER = "/register",
  // NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.NOT_FOUND]: AppRoutes.NOT_FOUND,
  [AppRoutes.STORAGE]: AppRoutes.STORAGE,
  [AppRoutes.STORAGE_VIEW]: AppRoutes.STORAGE_VIEW,
  [AppRoutes.REGISTER]: AppRoutes.REGISTER,
};
