import axios from 'axios'
import {
    fetchProblemsError,
    fetchProblemsPending,
    fetchProblemsSuccess,
} from './problems'

import api, { BASE_API_URL } from '../api'
function fetchProblems(dispatch) {
    dispatch(fetchProblemsPending())
    api.get(BASE_API_URL + '/auth/login')
        .then(function (response) {
            dispatch(fetchProblemsSuccess(response.data))
            return response
        })
        .catch(function (error) {
            // handle error
            dispatch(fetchProblemsError(error))
            console.log(error)
        })
        .then(function () {
            // always executed
        })
}

export default fetchProblems
