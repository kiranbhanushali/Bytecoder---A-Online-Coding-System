import axios from "axios";
import API from "../api";

export const AddProblemF = (data) => {
  axios
    .post("http://localhost:5000/api/v1/problem", data)
    .catch(function (error) {
      console.log(error);
    })
    .then(function (response) {
      console.log("problem added ");
      console.log(response);
    });
};
