import { AxiosError } from "axios";
import { IError } from "../types";

export const ERROR = "ERROR";

export const handleError = (error: any | AxiosError) => {
  if (error.response) {
    return {
      type: ERROR,
      status: error.response?.status,
      message: error.response?.data.message,
    } as IError;
  } else {
    return {
      type: ERROR,
      status: "",
      message: "Something went wrong",
    } as unknown as IError;
  }
};
