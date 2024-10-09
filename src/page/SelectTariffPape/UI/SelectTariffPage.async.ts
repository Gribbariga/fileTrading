import { lazy } from "react";

export const SelectTariffPageAsync = lazy(
  () => import("./SelectTariffPage.tsx")
);
