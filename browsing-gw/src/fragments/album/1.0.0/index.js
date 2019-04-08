const fs = require("fs");
const path = require("path");
const main = fs.readFileSync(path.join(__dirname, "./index.html"), "utf8");
const getAlbums = require("./getAlbums");

module.exports = {
    placeholder() {
        return `
        <div class="container">
            <h1>Loading Albums</h1>
        </div>
        `;
    },
    async data(req) {
        const albums = await getAlbums();

        await new Promise(res => setTimeout(res, 1000));

        return {
            data: albums.data.slice(0, 10)
        }
    },
    content(req, data) {
        const albumCards = data.map(item => `
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img height="200px" src="${item.url}"/>
            <div class="card-body">
                <p class="card-text">${item.title}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                </div>
            </div>
        </div>
    </div>
    `).join("");

        return {
            main: main.replace("{data}", albumCards)
        };
    }
};