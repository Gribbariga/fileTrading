import { ReactNode } from "react";

export interface ITariffFeature {
  Icon: ReactNode;
  text: string;
}
export interface ITariffCard {
  tariffName: string;
  isProfitable: boolean;
  saleValue?: number;
  storageSize: string;
  price: number;
  businessAccount?: number;
  tariffFeatures: ITariffFeature[];
}
