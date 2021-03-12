import api, { BASE_API_URL } from '../api'
import { fetchSubmission } from './fetchSubmission'
import { updateProblemMeta } from './problems'
import { submitError, submitRequest, submitResponse, submissionFetch, updateMeta } from './submit'

export function submitF(dispatch, data) {
    dispatch(submitRequest())
    api.post(BASE_API_URL + '/submit', data)
        .then(function (response) {
            console.log("response", data)
            response.data.problemcode = data.problemcode;

            // alert(response.data.stderr)
            dispatch(submitResponse(response.data))
            dispatch(updateMeta(response.data.meta))
            dispatch(updateProblemMeta(response.data))




        })
        .catch(function (error) {
            console.log(error)
            dispatch(submitError(error))
        })
    fetchSubmission(dispatch);

}
