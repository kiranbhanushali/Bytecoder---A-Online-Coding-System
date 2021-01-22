import axios from 'axios'
import { BASE_API_URL } from '../api'
import { loginF } from './loginAction'
import { registerError, registerRequest, registerSuccess } from './register'
export function registerF(dispatch, data) {
    dispatch(registerRequest())
    axios
        .post(BASE_API_URL + '/auth/register', data)
        .then(function (response) {
            console.log(response)
            loginF(dispatch, data)
            dispatch(registerSuccess(response.data))
        })
        .catch(function (error) {
            console.log(error)
            dispatch(registerError(error.response.data.msg))
        })
}
