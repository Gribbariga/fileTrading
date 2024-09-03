export interface ICreateDescriptionArg {
  folder_id: string;
  name?: string;
  description: string;
}

export interface ICreateDescriptionResponse {
  download_link: string;
}

export interface IEditDescriptionArg {
  new_name: string;
  new_description: string;
  folder_id: string;
}
