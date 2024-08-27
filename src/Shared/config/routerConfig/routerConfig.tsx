export enum AppRoutes {
  NOT_FOUND = "*",
  STORAGE = "/",
  // NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.NOT_FOUND]: "*",
  [AppRoutes.STORAGE]: "/",
};
