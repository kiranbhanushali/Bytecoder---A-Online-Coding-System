import api, { BASE_API_URL } from '../api'
import { submitError, submitRequest, submitResponse } from './submit'

export function submitF(dispatch, data) {
    dispatch(submitRequest())
    api.post(BASE_API_URL + '/submit', data)
        .then(function (response) {
            console.log(response)
            alert(response.data.stdout)
            dispatch(submitResponse(response.data))
        })
        .catch(function (error) {
            console.log(error)
            dispatch(submitError(error))
        })
}
