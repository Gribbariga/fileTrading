export interface IToggleDownloadPasswordArg {
  folder_id: string;
}

export interface IEditViewPasswordArg {
  folder_id: string;
  view_password: string | null;
}

export interface IUpdateLifeTimeArg {
  folder_id: string;
  new_lifetime: number;
}
