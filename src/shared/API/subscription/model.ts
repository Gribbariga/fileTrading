export interface ITariffs {
  name: string;
  price: number;
  max_storage_size: string;
  max_folder_size: string;
  max_file_size: string;
  max_folder_count: number;
  max_file_in_folder: number;
  max_file_at_time: number;
  max_lifetime: number;
  max_sub_account_count: number;
  tariff_id: number;
}

export type TGetTarrifs = {
  tariffs: ITariffs[];
};

export interface ISubscriptionStatusResponse {
  name: string;
  price: string;
  max_folder_size: string;
  max_storage_size: string;
  max_file_size: string;
  max_folder_count: number;
  max_file_in_folder: number;
  max_file_at_time: number;
  max_lifetime: number;
  max_sub_account_count: number;
  tariff_id: number;
  duration: number;
  created_at: string;
  updated_at: string;
}
