const axios = require('axios');

var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};
export default axios.create({
    baseURL: `http://localhost:5000/`,config
});


