import { TGetTarrifs } from "shared/API/subscription/modal";

type TTariffs = TGetTarrifs;

export interface ISubcriptionSlice {
  tariffs: TTariffs | null;
  subscription_id: number;
  fetchTarrifs: () => void;
}
