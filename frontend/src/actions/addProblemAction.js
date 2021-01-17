import api, { BASE_API_URL } from "../api";
import axios from "axios";

export function addProblemF(data) {
  api
    .post(BASE_API_URL + "/problem", data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
