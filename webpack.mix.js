let path = require("path");
let mix = require("laravel-mix");
let purgeCss = require("purgecss-webpack-plugin");
let glob = require("glob-all");
require("dotenv").config();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js("resources/assets/js/app.js", "public/js")
  .sass("resources/assets/sass/app.scss", "public/css")
  .version();

mix.browserSync(process.env.APP_URL);

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"]
      }
    ]
  },
  resolve: { alias: { "@": path.join(__dirname, "./resources/assets/js") } }
});

// if (mix.inProduction()) {
//   mix.webpackConfig({
//     plugins: [
//       new purgeCss({
//         paths: glob.sync([
//           path.join(__dirname, "resources/views/**/*.blade.php"),
//           path.join(__dirname, "resources/assets/js/**/*.vue")
//         ]),
//         extractors: [
//           {
//             extractor: class {
//               static extract(content) {
//                 return content.match(/[A-z0-9-:\/]+/g);
//               }
//             },
//             extensions: ["html", "js", "php", "vue"]
//           }
//         ]
//       })
//     ],
//     resolve: { alias: { "@": path.join(__dirname, "./resources/assets/js") } }
//   });
// }
