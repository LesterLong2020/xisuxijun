/**
 * @Author lester
 * @Date 2021-02-05
 */

(function () {
  let worker = null;
  if (typeof Worker !== 'undefined') {
    worker = new Worker(require("./WorkerDemo.js"));
    worker.onmessage = function (event) {
      console.log(event)
    }
  } else {
    console.warn("浏览器不支持 Web Worker ...");
  }
})();
