export function registerRequest() {
    return {
        type: 'REGISTER_REQUEST',
    }
}

export function registerSuccess(data) {
    return {
        type: 'REGISTER_SUCCESS',
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        msg: data.msg,
    }
}

export function registerError(error) {
    return {
        type: 'REGISTER_ERROR',
        error: error,
    }
}
