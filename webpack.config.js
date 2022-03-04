const path = require("path")

module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
            watch: true,
        }
    }
}