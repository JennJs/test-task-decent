export interface ICountry {
  name: string;
  capital: string;
  flagUrl: string;
}

export interface IError {
  type: string;
  status: number;
  message: string;
}
