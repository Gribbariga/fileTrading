import { TGetTarrifs } from "src/shared/API/subscription/model";

type TTariffs = TGetTarrifs;

export interface ISubcriptionSlice {
  tariffs: TTariffs | null;
  subscription_id: number;
  fetchTarrifs: () => void;
}
