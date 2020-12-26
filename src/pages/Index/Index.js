/**
 * @Author lester
 * @Date 2020-12-22
 */
import style from './style.less';
import Avatar from "@/assets/images/post6.png";

const a = '1';

const b = () => {
  console.log(a)
};

b();

const render = () => {
  return (
    `<div class="${style.indexWrap}">` +
      `<div class="${style.name}">Hello Lester 夕宿君兮5</div>` +
      `<img class="${style.img}" src="${Avatar}" alt=""/>` +
    '</div>'
  )
};

export default render();
