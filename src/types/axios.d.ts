interface IResponse {
  url: string;
  key: string;
  shrtlnk: string;
}

interface IError {
  message: string;
}
type ShrtlnkResponse = IError | IResponse;
