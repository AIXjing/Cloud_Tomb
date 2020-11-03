const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "../backend/dist"),
    // https://cli.vuejs.org/config/#devserver-proxy
    devServer: {
        proxy: 'http://localhost:3030'
    },
}