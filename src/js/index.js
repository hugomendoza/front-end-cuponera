// Import custom styles
import "@/src/css/main.scss";

function importAll(r) {
  return r.keys().map(r);
}
importAll(require.context("../img/", false, /\.(png|jpe?g|svg)$/));

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
  module.hot.accept();
}
