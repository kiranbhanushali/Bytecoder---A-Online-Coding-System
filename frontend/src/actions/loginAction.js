import api, { BASE_API_URL } from '../api'
import axios from 'axios'

import { loginRequest, loginSuccess, loginError, logout } from './login'

export function loginF(dispatch, data) {
    dispatch(loginRequest())
    api.post(BASE_API_URL + '/auth/login', data)
        .then(function (response) {
            console.log(response)
            let token = response.data.token
            localStorage.setItem('token', token)
            dispatch(loginSuccess(token, response.data))
        })
        .catch(function (error) {
            console.log('from erro')
            console.log(error.response)
            dispatch(loginError(error.response.data.msg))
        })
}
