import api, { BASE_API_URL } from '../api'
import { fetchSubmission } from './fetchSubmission'
import { submitError, submitRequest, submitResponse, submissionFetch } from './submit'

export function submitF(dispatch, data) {
    dispatch(submitRequest())
    api.post(BASE_API_URL + '/submit', data)
        .then(function (response) {
            console.log(response)
            // alert(response.data.stderr)
            dispatch(submitResponse(response.data))
        })
        .catch(function (error) {
            console.log(error)
            dispatch(submitError(error))
        })
    fetchSubmission(dispatch);

}
