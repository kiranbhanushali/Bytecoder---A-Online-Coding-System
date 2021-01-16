import {
  fetchProblemsSuccess,
  fetchProblemsError,
  fetchProblemsPending,
} from "./problems";

import api, { BASE_API_URL } from "../api";
import axios from "axios";
function fetchProblems(dispatch) {
  dispatch(fetchProblemsPending());
  axios
    .get("http://localhost:5000/api/v1/problems")
    .then(function (response) {
      dispatch(fetchProblemsSuccess(response.data));
      return response;
    })
    .catch(function (error) {
      // handle error
      dispatch(fetchProblemsError(error));
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

export default fetchProblems;
