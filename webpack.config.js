/**
 * Created by may on 7/25/16.
 */

module.exports = {
    entry : {
        app1 : './src/pages/app/example.js',
        app2 : './src/pages/app/example2.js'
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].js"
    }
};