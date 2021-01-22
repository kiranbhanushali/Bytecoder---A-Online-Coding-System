import { storage } from "../base.js"

import { uploadImagePending, uploadImageSuccess, uploadImageError } from './profile'

export function uploadImage(dispatch, data,username) {
    dispatch(uploadImagePending())
    const uploadTask = storage.ref(`/images/${username}`).put(data);
    uploadTask.on("state_changed", console.log, console.error, () => {
        storage
            .ref("images")
            .child(username)
            .getDownloadURL()
            .then((url) => {
                dispatch(uploadImageSuccess(url))
            });
    });
}

