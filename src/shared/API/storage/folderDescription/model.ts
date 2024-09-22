export interface IAddDescriptionArg {
  folder_id: string;
  name?: string;
  description: string;
}

export interface IAddDescriptionResponse {
  download_link: string;
}

export interface IEditDescriptionArg {
  new_description: string;
  folder_id: string;
}
