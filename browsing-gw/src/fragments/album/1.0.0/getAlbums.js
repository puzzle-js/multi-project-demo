const axios = require("axios");

module.exports = () => {
    return axios.get("https://jsonplaceholder.typicode.com/photos");
}