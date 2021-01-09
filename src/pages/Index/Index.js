/**
 * @Author lester
 * @Date 2020-12-22
 */
import style from './style.less';
import Avatar from "@/assets/images/post6.png";
// import '../Demo/EventLoop';
// import '../Demo/Promise';
// import '../Demo/Test';
import '../Demo/CallApplyBind';


const render = () => {
  return (
    `<div class="${style.indexWrap}">` +
      `<div class="${style.name}">Hello Lester 夕宿君兮5</div>` +
      `<img class="${style.img}" src="${Avatar}" alt=""/>` +
    '</div>'
  )
};

export default render();

/**
 * vue react原理 generator async await new操作 this指向 判断数据类型 call apply bind 数组扁平化去重排序 nginx webpack常用配置 https原理 axios 跨域 防抖节流 闭包 transform
 *
 */