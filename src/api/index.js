import { BASE_URL } from "../constants";

export const getData = (url) => {
  return fetch(BASE_URL + url)
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => console.log(error));
};
