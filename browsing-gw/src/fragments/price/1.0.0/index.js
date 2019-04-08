const fs = require("fs");
const path = require("path");
const main = fs.readFileSync(path.join(__dirname, "./index.html"), "utf8");

module.exports = {
    placeholder() {
        return 'Loading products...';
    },
    data(req) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    data: {
                        name: 'A Book',
                        price: '2.41 $'
                    }
                });
            }, 2000);
        });
    },
    content(req, data) {
        return {
            main
        };
    }
};