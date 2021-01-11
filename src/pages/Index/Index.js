/**
 * @Author lester
 * @Date 2020-12-22
 */
import style from './style.less';
import Avatar from "@/assets/images/post6.png";
// import '../Demo/EventLoop';
// import '../Demo/Promise';
// import '../Demo/Test';
// import '../Demo/CallApplyBind';
// import '../Demo/New';
import '../Demo/DebounceThrottle';


const render = () => {
  return (
    `<div class="${style.indexWrap}">` +
      `<div class="${style.name}">Hello Lester 夕宿君兮5</div>` +
      `<input id="lester" />` +
      `<img class="${style.img}" src="${Avatar}" alt=""/>` +
    '</div>'
  )
};

export default render();

/**
 * react原理 generator async await this指向 判断数据类型  数组扁平化去重排序 nginx webpack常用配置 https原理 axios 跨域  transform
 * serverLess pwa service worker 路由 响应式弹性布局
 * call apply bind Promise Event Loop new操作 vue 防抖节流 闭包
 */