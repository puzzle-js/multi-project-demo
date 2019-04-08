const fs = require("fs");
const path = require("path");
const main = fs.readFileSync(path.join(__dirname, "./index.html"), "utf8");

module.exports = {
    placeholder() {
        return 'Loading products...';
    },
    data(req) {
        return { data: {} }
    },
    content(req, data) {
        return {
            main
        };
    }
};