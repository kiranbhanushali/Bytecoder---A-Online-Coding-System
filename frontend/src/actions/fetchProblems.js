import axios from 'axios'
import {
    fetchProblemsError,
    fetchProblemsPending,
    fetchProblemsSuccess,
} from './problems'

function fetchProblems(dispatch) {
    dispatch(fetchProblemsPending())
    axios
        .get('http://localhost:5000/api/v1/problems')
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
