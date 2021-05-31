import { BASE_URL, HAMSTERS_URL, RANDOM_URL, MATCHES_URL } from "../constants";
import { showErrorMessage } from "../util";

const myHeaders = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json",
});

export const getData = (url) => {
  return fetch(BASE_URL + HAMSTERS_URL)
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => showErrorMessage(error));
};

export const deleteData = (id) => {
  return fetch(BASE_URL + HAMSTERS_URL + id, {
    method: "DELETE",
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => showErrorMessage(error));
};

export const addData = (data) => {
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
  };

  return fetch(BASE_URL + HAMSTERS_URL, requestOptions)
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => showErrorMessage(error));
};

export const getRandomData = () => {
  return fetch(BASE_URL + HAMSTERS_URL + RANDOM_URL)
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => showErrorMessage(error));
};

export const updateDate = (data, id) => {
  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  };

  return fetch(BASE_URL + HAMSTERS_URL + id, requestOptions)
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => showErrorMessage(error));
};

export const addMatches = (data) => {
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  };

  return fetch(BASE_URL + MATCHES_URL, requestOptions)
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => showErrorMessage(error));
};
