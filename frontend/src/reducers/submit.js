const initialState = {
    problem_code: null,
    pending: null,
    error: null,
    response: null,
    inqueue: null,
    submission: null,
    problemmeta: {
        totalSubmission: 0,
        submission: 0,
    },

}

export default function submitReducer(state = initialState, action) {
    switch (action.type) {
        case 'SUBMIT_REQUEST':
            return {
                ...state,
                pending: true,
            }
        case 'SUBMIT_SUCCESS':
            return {
                ...state,
                inqueue: true,
            }
        case 'SUBMIT_ERROR':
            return {
                ...state,
                error: action.error,
                pending: false,
                inqueue: false,
            }
        case 'SUBMIT_RESPONSE':
            return {
                ...state,
                response: action.response,
                inqueue: false,
                pending: false,
            }
        case 'SUBMISSION_FETCH':
            return {
                ...state,
                submission: action.response,

            }
        case 'CLEAR_SUBMISSION':
            return {
                ...state,
                submission: null,
            }
        case "UPDATE PROBLEM META":
            return {
                ...state,
                problemMeta: action.problemMeta,

            };
        default:
            return state
    }
}
