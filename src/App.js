/**
 * Created by Lester on 2020/12/19
 */

import '@/App.css';
import Avatar from '@/assets/images/avatar.png';
import Index from './pages/Index/Index';

const render = () => {
  return (
      '<div class="wrap">' +
            '<div class="title">Hello Lester 夕宿君兮</div>' +
            '<div class="name">Hello Lester 夕宿君兮2</div>' +
            `<img class="img" src="${Avatar}" alt=""/>` +
      '</div>'
  )
};

export default (render() + Index);
