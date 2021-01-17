import api, { BASE_API_URL } from "../api";
import axios from "axios";

export function addProblemF(data) {
  axios
    .post(BASE_API_URL + "/problem", data)
    .then(function (response) {})
    .catch(function (error) {
      console.log(error);
    });
}
