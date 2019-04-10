const fs = require("fs");
const path = require("path");
const main = fs.readFileSync(path.join(__dirname, "./index.html"), "utf8");
const axios = require("axios");


module.exports = {
    placeholder() {
        return `
        <div class="container text-center">
            <img src="https://loading.io//spinners/rolling/lg.curve-bars-loading-indicator.gif"/>
        </div>
        `;;
    },
    async data(req) {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos/${req.params.id}`);

        await new Promise(res => setTimeout(res, 1000));
        return { data }
    },
    content(req, data) {
        return {
            main: `<div class="container d-flex mb-5 mt-5 justify-content-center"><div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${data.url}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div></div>`
        };
    }
};