export function submitRequest() {
    return {
        type: 'SUBMIT_REQUEST',
    }
}

export function submitSuccess() {
    return {
        type: 'SUBMIT_SUCCESS',
    }
}

export function submitError(error) {
    return {
        type: 'SUBMIT_ERROR',
        error: error,
    }
}

export function submitResponse(response) {
    return {
        type: 'SUBMIT_RESPONSE',
        response,
    }
}
export function submissionFetch(response) {
    return {
        type: 'SUBMISSION_FETCH',
        response

    }
}