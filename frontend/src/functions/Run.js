import axios from "axios";
import API from "../api";

export const RunF = (data) => {
    console.log(data);
    // const formData = new FormData();
    // formData.append(
    //    "myFile",
    //     data.file,
    //     data.file.name
    //  );
    axios.defaults.headers.common["authorization"] = localStorage.getItem(
        "token"
    );
    axios
        .post("http://localhost:5000/api/v1/submit", data)
        .catch(function (error) {
            console.log(error);
        })
        .then(function (response) {
            console.log("her");
            console.log(response);
        });
};
