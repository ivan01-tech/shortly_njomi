export interface IResponse {
  url: string;
  key: string;
  shrtlnk: string;
}

export interface IError {
  message: string;
}
export type ShrtlnkResponse = IError | IResponse;
