import { ReactNode } from "react";

export interface ITariffFeature {
  Icon: ReactNode;
  text: string;
}
export interface ITariffCard {
  backendName: string;
  tariffName: string;
  isProfitable: boolean;
  saleValue?: number;
  storageSize: string;
  price: number;
  businessAccount?: number;
  tariffFeatures: ITariffFeature[];
}
export type TariffNames =
  | "Free"
  | "Premium"
  | "Business"
  | "Corporate"
  | "Unauthorized";
