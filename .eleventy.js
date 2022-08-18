module.exports = function (config) {
    config.addPassthroughCopy("./src/assets")
    config.addPassthroughCopy("./src/css")
    config.addPassthroughCopy("./src/js")

    return {
        dir: {
            input: "./src",
            output: "_site"
        }
    }

}