import axios from "axios";
import API from "../api";

export const LoginF = (data) => {
    var encodeURI = API.BASE + "auth/login";
    axios
        .post(encodeURI, data)
        .catch(function (error) {
            console.log(error);
        })
        .then(
            function (response) {
                console.log(response);
                let token = response.data.token.split(' ');
                localStorage.setItem("token",token[1]);
            }
        );
};

export const RegisterF = (data) => {
    var encodeURI = API.BASE + "auth/register";
    axios
        .post(encodeURI, data)
        .catch(function (error) {
            console.log(error);
        })
        .then(
            function (response) {
                console.log(response);
                LoginF(data);
            }
        );
};
