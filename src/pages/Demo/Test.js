/**
 * @Author lester
 * @Date 2021-01-08
 */

const xhr_1 = new XMLHttpRequest(); // 请求1

xhr_1.onreadystatechange = function () {
  if (xhr_1.readyState === 4 && xhr_1.status === 200) {
    console.log(xhr_1.responseText);
    const xhr_2 = new XMLHttpRequest(); // 请求2
    xhr_2.onreadystatechange = function () {
      if (xhr_2.readyState === 4 && xhr_2.status === 200) {
        console.log(xhr_2.responseText);
        const xhr_3 = new XMLHttpRequest(); // 请求3
        xhr_3.onreadystatechange = function () {
          if (xhr_3.readyState === 4 && xhr_3.status === 200) {
            console.log(xhr_3.responseText);
          }
        }
      }
    }
  }
}
