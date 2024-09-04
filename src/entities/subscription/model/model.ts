import {
  ISubscriptionStatusResponse,
  TGetTarrifs,
} from "src/shared/API/subscription/model";

type TTariffs = TGetTarrifs;

type TSubscribeInfo = ISubscriptionStatusResponse;

export interface ISubcriptionSlice {
  tariffs: TTariffs | null;
  subscribeStatus: TSubscribeInfo | null;
  setSubscribeStatus: (info: TSubscribeInfo) => void;
  fetchTarrifs: () => void;
}
