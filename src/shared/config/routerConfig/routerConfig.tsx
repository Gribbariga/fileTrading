export enum AppRoutes {
  NOT_FOUND = "*",
  STORAGE = "/",
  STORAGE_VIEW = "/storage/:storageLink",
  REGISTER = "/register",
  LOGIN = "/login",
  TWOFA = "/twofa",
  HOME = "/home",
  CORPORATE = "/corporate",
  // NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.NOT_FOUND]: AppRoutes.NOT_FOUND,
  [AppRoutes.STORAGE]: AppRoutes.STORAGE,
  [AppRoutes.STORAGE_VIEW]: AppRoutes.STORAGE_VIEW,
  [AppRoutes.REGISTER]: AppRoutes.REGISTER,
  [AppRoutes.LOGIN]: AppRoutes.LOGIN,
  [AppRoutes.TWOFA]: AppRoutes.TWOFA,
  [AppRoutes.HOME]: AppRoutes.HOME,
  [AppRoutes.CORPORATE]: AppRoutes.CORPORATE,
};
