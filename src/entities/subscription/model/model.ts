import {
  ISubscriptionStatusResponse,
  ITariffs,
} from "src/shared/API/subscription/model";

type TTariffs = ITariffs;

type TSubscribeInfo = ISubscriptionStatusResponse;

export interface ISubcriptionSlice {
  tariffs: TTariffs[] | null;
  subscribeStatus: TSubscribeInfo | null;
  setSubscribeStatus: (info: TSubscribeInfo) => void;
  fetchTarrifs: () => void;
}
