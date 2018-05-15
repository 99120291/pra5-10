require.config({
    baseUrl: "js/app",
    paths: {
        // 库
        "jquery": "../libs/jquery-3.2.1.min",
        // 自己
        "index": "./index",
        "util": "./util"
    },
    shim: {
        "util": {
            // deps: ["jquery"]
        }
    }
})

require(["index"])