
export function uploadImagePending() {
    return {
        type: "UPLOAD_IMAGE_PENDING",
    };
}
export function uploadImageSuccess(url) {
    return {
        type: "UPLOAD_IMAGE_SUCCESS",
        payload: url
    };
}
export function uploadImageError(error) {
    return {
        type: "UPLOAD_IMAGE_ERROR",
        payload: error
    };
}
