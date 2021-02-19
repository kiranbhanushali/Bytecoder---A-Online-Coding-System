import api, { BASE_API_URL } from '../api'
import { fetchSubmission } from './fetchSubmission'
import { loginError, loginRequest, loginSuccess } from './login'
import { submissionFetch } from './submit'


export async function loginF(dispatch, data) {
    dispatch(loginRequest())
    await api.post(BASE_API_URL + '/auth/login', data)
        .then(function (response) {
            console.log("response", response)
            let token = response.data.token
            localStorage.setItem('token', token)

            dispatch(loginSuccess(token, response.data))
        })
        .catch(function (error) {
            console.log('from erro')
            console.log(error.response)
            dispatch(loginError(error.response.data.msg))
        })
    console.log("dispatch", dispatch)

}

