/**
 * @Author lester
 * @Date 2021-02-05
 */

setTimeout(() => {
  if (typeof postMessage === 'function') {
    postMessage('Hello Lester')
  }
}, 1000);
