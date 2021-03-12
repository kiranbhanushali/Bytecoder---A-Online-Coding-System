export function fetchProblemsPending() {
    return {
        type: "FETCH_PROBLEMS_PENDING",
    };
}
export function fetchProblemsSuccess(problems) {
    return {
        type: "FETCH_PROBLEMS_SUCCESS",
        payload: problems
    };
}
export function fetchProblemsError(error) {
    return {
        type: "FETCH_PROBLEMS_ERROR",
        payload: error
    };
}
export function updateProblemMeta(data) {
    return {
        type: "UPDATE PROBLEMS META",
        problemcode: data.problemcode,
        meta: data.problemmeta,
    }
}
