import api, { BASE_API_URL } from '../api'
import { submissionFetch } from './submit'
export function fetchSubmission(dispatch) {
    api.get(BASE_API_URL + '/submission').then(function (response) {
        console.log("response.data", response)
        dispatch(submissionFetch(response.data))
    })
}