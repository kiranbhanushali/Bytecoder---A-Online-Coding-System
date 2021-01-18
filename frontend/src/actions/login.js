export function loginRequest() {
    return {
        type: 'LOGIN_REQUEST',
    }
}

export function loginSuccess(token, data) {
    return {
        type: 'LOGIN_SUCCESS',
        token: token,
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        msg: data.msg,
    }
}

export function loginError(error) {
    return {
        type: 'LOGIN_ERROR',
        error: error,
    }
}

export function logout() {
    return {
        type: 'LOGOUT',
    }
}
