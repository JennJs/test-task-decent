import axios, { AxiosError } from "axios";

import { handleError } from "../functions";
import { ICountry, IError } from "../types";

const countryListURL = "https://restcountries.com/v3.1/all";
const countryByNameURL = "https://restcountries.com/v3.1/name/";

export const getCountryList = async () => {
  try {
    const response = await axios.get(countryListURL);
    return response.data;
  } catch (error: AxiosError | any) {
    console.log("getCountryListError", error);
    return handleError(error);
  }
};

export const getCountryByName = async (countryName: string) => {
  const url = `${countryByNameURL + countryName}`;
  let result: ICountry | IError;
  try {
    const response = await axios.get(url);
    result = {
      name: response.data[0].name.common,
      capital: response.data[0].capital[0],
      flagUrl: response.data[0].flags.svg,
    };
  } catch (error: AxiosError | any) {
    console.log("getCountryByNameError", error);
    result = handleError(error);
  }
  return result;
};
