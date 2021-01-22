import { storage } from "../base.js"
import api, { BASE_API_URL } from '../api'

import { uploadImagePending, uploadImageSuccess, uploadImageError } from './profile'

export function uploadImage(dispatch, data, username) {
    dispatch(uploadImagePending())
    const uploadTask = storage.ref(`/images/${username}`).put(data);
    uploadTask.on("state_changed", console.log, console.error, () => {
        storage
            .ref("images")
            .child(username)
            .getDownloadURL()
            .then((url) => {
                dispatch(uploadImageSuccess(url))
                api.post(BASE_API_URL + '/img', { url: url, username: username })
                    .then(function (response) {
                        console.log(response)

                    })
                    .catch(function (error) {
                        console.log('from erro')
                        console.log(error.response)
                    })
            });
    });
}

