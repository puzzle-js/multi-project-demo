process.env.DEFAULT_CONTENT_TIMEOUT = "70000";
process.env.GLOBAL_REQUEST_TIMEOUT = "75000";

const PuzzleJs = require('@puzzle-js/core');
const path = require('path');

const gateway = new PuzzleJs.Gateway({
    name: "platform-gw",
    fragments: [
        {
            name: "footer",
            testCookie: "my-product-ab",
            version: "1.0.0",
            versions: {
                "1.0.0": {
                    assets: [],
                    dependencies: []
                }
            },
            render: {
                url: "*"
            }
        },
        {
            name: "header",
            testCookie: "my-header-ab",
            version: "1.0.0",
            versions: {
                "1.0.0": {
                    assets: [],
                    dependencies: []
                }
            },
            render: {
                url: "*"
            }
        }
    ],
    api: [

    ],
    serverOptions: {
        port: 4444
    },
    url: 'https://localhost:4444',
    fragmentsFolder: path.join(__dirname, "./src/fragments")
});


gateway.init(() => {
    console.log('Platform-GW is ready to respond');
});
