import api, { BASE_API_URL } from '../api'

export function addProblemF(data) {
    api.post(BASE_API_URL + '/problem', data)
        .then(function (response) {
            console.log(response)
            alert('Problem Added ')
        })
        .catch(function (error) {
            console.log(error)
            alert('eror in adding problem ')
        })
}
