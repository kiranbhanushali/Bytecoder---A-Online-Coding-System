import api, { BASE_API_URL } from '../api'
import axios from 'axios'

import {
    submitRequest,
    submitSuccess,
    submitResponse,
    submitError,
} from './submit'

export function submitF(dispatch, data) {
    dispatch(submitRequest())
    api.post(BASE_API_URL + '/submit', data)
        .then(function (response) {
            console.log(response)
            alert(response.data.exe.stdout)
            dispatch(submitResponse(response.data))
        })
        .catch(function (error) {
            console.log(error)
            dispatch(submitError(error))
        })
}
